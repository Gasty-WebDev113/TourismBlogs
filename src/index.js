import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ApolloClient from 'apollo-boost'; //Start the FullStack Magic
import { ApolloProvider } from '@apollo/react-hooks';
import Context from './Context'

const clientconect = new ApolloClient({
    uri: 'http://localhost:3000/api'
})

ReactDOM.render(
<Context.Provider>
    <ApolloProvider client={clientconect}>
        <App />
    </ApolloProvider>
</Context.Provider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
