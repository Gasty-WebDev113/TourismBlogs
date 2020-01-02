import React from 'react';
import {Photo, SelectedPhoto} from '../constants/icons'
import { useMutation } from '@apollo/react-hooks'
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import {UPLOAD_PROFILE_PHOTO} from '../constants/gqltags'

export const useUploadImage = () => {
    const [profileImageUpload,{loading}] = useMutation(UPLOAD_PROFILE_PHOTO)

    const onDrop = useCallback(
        ([file]) => {
            profileImageUpload({variables: {file}}).then(window.location.reload())
        },
        [profileImageUpload]
    )
    const { getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
    return(
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                    {
                        isDragActive ? (
                            <SelectedPhoto />
                        ) : (
                            <Photo />
                        )
                    }        
            </div>
    )
}