import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ApolloClient from 'apollo-client'; //Start the FullStack Magic
import { ApolloProvider } from '@apollo/react-hooks';
import { createUploadLink } from 'apollo-upload-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import Context from './Context'
import { ApolloLink, concat } from "apollo-link";

const apolloCache = new InMemoryCache()
const uploadlink =  new createUploadLink({uri: 'http://localhost:4000/api'});

const operationmiddleware = new ApolloLink((operation, forward) => {//This execute before of any request
    const token = window.sessionStorage.getItem('token')
    operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ''
            }
        })
    return forward(operation)
    })

const clientconect = new ApolloClient({
    cache: apolloCache,
    link: concat(operationmiddleware, uploadlink) //Concat the uri and the request 
})

ReactDOM.render(
<Context.Provider>
    <ApolloProvider client={clientconect}>
        <App />
    </ApolloProvider>
</Context.Provider>, document.getElementById("root"));

serviceWorker.unregister();
