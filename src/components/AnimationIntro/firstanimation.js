
import React from 'react'
import Lottie from "react-lottie";

import './lottiestyles.css'


var Animation = require ('./socialmedia.json'); //Use require becuase if you use ES6 this is imported as a React Component and the SVG breaks 

//Yes this is so broken --- Fuck....

export default class FirstAnimation extends React.Component {

    render() {
        //Lottie configuration

        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: Animation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }}

        return (
        <Lottie options={defaultOptions}/> 
        )
}}



