import styled from "styled-components";

export const FileviewContainer = styled.aside`
    display: 'flex';
    flex-direction: 'row';
    flex-wrap: 'wrap';
    margin-top: 16;
`
export const FileList = styled.div`
    display: inline-flex;
    border-radius: 2px;
    border: '1px solid #eaeaea';
    margin-bottom: 8px;
    margin-right: 8px;
     width: 100px;
    height: 100px;
    padding: 4px;
    box-sizing: border-box;
` 

export const FileInner = styled.div`
    display: flex;
    min-width: 0px;
    overflow: hidden;
`

export const FilePreview = styled.img`
    display: block;
    width: auto;
    height: 100%;
`