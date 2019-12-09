import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ApolloClient from 'apollo-boost'; //Start the FullStack Magic
import { ApolloProvider } from '@apollo/react-hooks';
import { createHttpLink } from 'apollo-link-http';
import Context from './Context'


const clientconect = new ApolloClient({
    uri: 'http://localhost:4000',
    request: operation =>{ //This execute before of any request
        const token = window.sessionStorage.getItem('token')
        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ''
            }
        })
    }
})

ReactDOM.render(
<Context.Provider>
    <ApolloProvider client={clientconect}>
        <App />
    </ApolloProvider>
</Context.Provider>, document.getElementById("root"));

serviceWorker.unregister();
