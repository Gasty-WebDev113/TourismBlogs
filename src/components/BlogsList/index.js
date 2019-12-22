import React  from 'react';
import Button from 'react-bootstrap/Button'
import { Container, ButtonsCointainer } from './styles'
import { BlogsListComponent } from './blogcomponent'
import { Loader } from '../Loader'
import  NotFound  from '../404/index'
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";
import { useQuery } from '@apollo/react-hooks';

export const BlogsList = ({query}) =>{

    function Blogs(){
        const { loading, error, data } = useQuery(query);
        if (loading) return <Loader/>;
        if (error) return <NotFound/>;
        return (
            data.getBlogs.map(Blog => (
                <BlogsListComponent {...Blog} />
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
