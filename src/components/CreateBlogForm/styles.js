import styled from "styled-components";

export const CreateBlogFormContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 5vw;
    display: inline-block;
    
    @media (min-width: 768px) and (max-width: 1024px){
        padding-top: 10vw;
    }
    @media (min-width: 320px) and (max-width: 767px){
        padding-top: 25vw;
    }

`