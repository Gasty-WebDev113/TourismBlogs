import React, { Component } from 'react'
import { LoginImage } from '../components/LoginImage'
import { LoginForm } from '../components/LoginForm'

export default class LoginAndSing extends Component {
    render() {
        return (
            <>
                <LoginForm/>
                <LoginImage/>
            </>
        )
    }
}
