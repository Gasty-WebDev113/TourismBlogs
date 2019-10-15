import React from 'react';
import Lottie from "react-lottie";
var NotFoundAnimation = require ('./error.json');

//Nota agregar un SetTimeOut

export default class NotFound extends React.Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: NotFoundAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }}

        return (
        <Lottie options={defaultOptions}/> 
        )
}
}
