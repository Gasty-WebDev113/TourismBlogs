import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button'
import { Container, ButtonsCointainer } from './styles'
import { BlogComponent } from './blogcomponent'
import { Loader } from '../Loader'
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";

export const BlogsPage = () =>{

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [navigation, setNavigation] = useState(10)
    const [current, setCurrent] = useState(0)

    //I change this api in the future

    useEffect(function(){
        window.fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts =>{
            console.log(posts)
            setData(posts)
            setLoading(false)
        })
    }, []);

    const ChangeBlogs = () => {
        setNavigation(navigation + 10)
        setCurrent(current + 10)
    }

    const ReturnBlogs = () => {
        setNavigation(navigation - 10)
        setCurrent(current - 10)
    }

    const sliceddata = data.slice(current, navigation)

    return(
        <Container >
            {
                loading ? <Loader/> : null
            }
            {
                sliceddata.map(post => <BlogComponent {...post} />)
            }
            {
                loading===false ? 
                <ButtonsCointainer aria-label="Basic example">
                    <Button onClick={() => ReturnBlogs()}><IoMdArrowRoundBack/></Button>
                    <Button onClick={() => ChangeBlogs()}><IoMdArrowRoundForward/></Button>
                   
                </ButtonsCointainer> : null
                
            }
            
        </Container>
    )
}
