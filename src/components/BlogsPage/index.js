import React  from 'react';
import Button from 'react-bootstrap/Button'
import { Container, ButtonsCointainer } from './styles'
import { BlogComponent } from './blogcomponent'
import { Loader } from '../Loader'
import  NotFound  from '../404/index'
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";
import { useQuery } from '@apollo/react-hooks';
import {GET_BLOGS} from '../../constants/gqltags'

export const BlogsPage = () =>{

    

    function Blogs(){
        const { loading, error, data } = useQuery(GET_BLOGS);
        if (loading) return <Loader/>;
        if (error) return <NotFound/>;
        return (
            
            data.getBlogs.map(Blog => (
                <BlogComponent {...Blog} />
            ))
        )}
    return(
        <Container >
            {   
                Blogs()
            } 
        </Container>
    )
}
