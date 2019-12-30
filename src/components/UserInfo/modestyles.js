import styled from 'styled-components'

export const Changer = styled.div`
    width: 25vw;
    height: 5vh;
    margin-bottom: 3vh;
    position: absolute;
    align-items: center;
    @media (min-width: 769px){
      right: 15vw;
      width: 25vw;
    }

    @media (max-width: 768px){
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 5vh;

    }
    @media (max-width: 426px){
      width: 35vw;
      right: 10vw;
    }
    
`
export const Activity = styled.div`
    position: relative;
    height: 5vh;
    float: left;
    text-align: center;
    line-height: 5vh;
    /*Sorry, I could't solve in another shape*/
    color: ${props => props.lettercolors ? 'white' : 'black' };
    cursor: pointer;

    @media (max-width: 768px){
        font-weight: 2vw
    }
    @media (max-width: 426px){
        font-weight: 1vw
    }
`

export const ButtonMode = styled.div`
    position: absolute;
    width: 8vw;
    height: 5vh;
    background: gray;
    border-radius: 28px;
    transform: translateX(${props => props.movement ? '-1.5vw' : '19vw' });
    transition-duration: 0.25s;

    @media (max-width: 2560px){
      width: 10vw;
      transform: translateX(${props => props.movement ? '-3vw' : '19vw' });
    }

    @media (max-width: 1440px){
      width: 10vw;
      transform: translateX(${props => props.movement ? '-3vw' : '19vw' });
    }

    @media (max-width: 768px){
      width: 10vw;
      transform: translateX(${props => props.movement ? '-1.5vw' : '17.5vw' });
    }
    @media (max-width: 426px){
      width: 15vw;
      transform: translateX(${props => props.movement ? '-1.5vw' : '22.5vw' });
    }
    @media (max-width: 376px){
      width: 18vw;
      transform: translateX(${props => props.movement ? '-1.5vw' : '20.5vw' });
    }
    
`

export const Blogs = styled(Activity)`
    float: right;
`
