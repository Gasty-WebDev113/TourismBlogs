import React from 'react';
import './styles.css'

export const Loader = () =>(
    <div className="LoaderContainer">
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
)