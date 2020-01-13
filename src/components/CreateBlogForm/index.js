import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {CreateBlogFormContainer} from './styles'
import {useCreateBlog} from '../../hooks/useCreateBlog'

export const CreateBlogForm = () =>{

    const uploads = useCreateBlog()

    return(
        <CreateBlogFormContainer>
                {
                    uploads
                }   
        </CreateBlogFormContainer>
    )
}