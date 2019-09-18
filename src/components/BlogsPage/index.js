import React, {useState, useEffect} from 'react';
import { Container } from './styles'
import { BlogComponent } from './blogcomponent'
import { Loader } from '../Loader'

export const BlogsPage = () =>{

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    //I change this api in the future


    useEffect(function(){
        window.fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts =>{
            setData(posts)
            setLoading(false)
        })
    }, []);


    return(
        <Container >
            {
                loading ? <Loader/> : null
            }
            {
                data.map(post => <BlogComponent {...post} />)
            }

        </Container>
    )
}
