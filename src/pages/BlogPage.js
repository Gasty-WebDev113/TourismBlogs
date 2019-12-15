import React, { Component } from 'react'
import {BlogDetail} from '../components/BlogDetail'

export const BlogPage = ({match}) =>(
    <BlogDetail blogid={match.params.id} />
)