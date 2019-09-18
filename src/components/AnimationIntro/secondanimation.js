
import React from 'react'
import Lottie from "react-lottie";
import './lottiestyles.css'
var Animation = require ('./world.json'); 

//Yes this is so broken --- Fuck....

export default class SecondAnimation extends React.Component {

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
        <Lottie options={defaultOptions} /> 
        )
}}
