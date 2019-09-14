import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card'
import Image from '../../images/taiwan.jpg'
import Figure from 'react-bootstrap/Figure'
import { Container } from './styles'
import { BlogComponent } from './blogcomponent'
import axios from 'axios'

export const BlogsPage = () =>{

    const [data, setData] = useState([])

    //I change this api in the future

    useEffect(function(){
        window.fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts =>{
            setData(posts)
        })
    }, []);


    return(
        <Container >
            {
                data.map(post => <BlogComponent {...post} />)
            }
        </Container>
    )
}