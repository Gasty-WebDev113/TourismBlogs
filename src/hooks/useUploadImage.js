import React from 'react';
import {Photo, SelectedPhoto} from '../constants/icons'
import { useMutation } from '@apollo/react-hooks'
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import gql from 'graphql-tag';

const UPLOAD_PROFILE_PHOTO = gql`
  mutation ProfileImageUpload($file: Upload!) {
    profileImageUpload(file: $file) {
      filename
      mimetype
      encoding
    }
  }
`;

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