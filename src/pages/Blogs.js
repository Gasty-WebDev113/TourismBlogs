import React, { Component } from 'react'
import {BlogsList} from '../components/BlogsList'
import {GET_BLOGS} from '../constants/gqltags'

export default class Blogs extends Component {
    render() {
        return (
            <div style={{background: "whitesmoke"}}>
                <BlogsList query={GET_BLOGS} />
            </div>
        )
    }
}

