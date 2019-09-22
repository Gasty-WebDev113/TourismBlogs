import styled, {keyframes}  from 'styled-components'

const title = keyframes`
    from{
        width: 0%
    }
    to{
        width: 100%
    }
`

export const PageContainer = styled.div`
    float: right;
    height: 100vh;
    width: 50%;
`

export const Title = styled.h1`
    position:relative;
    margin-top: 15%;
    text-align: center;
    font-weight: bold;
`