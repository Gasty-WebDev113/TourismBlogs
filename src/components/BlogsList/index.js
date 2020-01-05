import React  from 'react';
import Button from 'react-bootstrap/Button'
import { Container, ButtonsCointainer } from './styles'
import { BlogsListComponent } from './blogcomponent'
import { Loader } from '../Loader'
import  NotFound  from '../404/index'
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";


export const BlogsList = ({querydata}) =>{

    return(
        <Container >
            {   
                 querydata.map(Blog => (
                    <BlogsListComponent {...Blog} />
                ))
            } 
        </Container>
    )
}
