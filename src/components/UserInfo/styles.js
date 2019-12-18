import styled from 'styled-components'

export const InfoContainer = styled.div`
    position: absolute;
    min-width: 100%;
    background: whitesmoke;
    min-height: 100%;
    padding-top: 10%;
    @media (max-width: 650px){
        padding-top: 20%;
    }
`
export const UserInfoContainer = styled.div`
  position: absolute;
  min-width: 40vw;
  background: -webkit-linear-gradient(top, rgba(158,158,158,1) 0%, rgba(245,245,245,1) 100%);
  min-height: 70%;
  margin-left: 5vw;
  @media (min-width: 1090px){
    min-width: 30%;
    }
  @media (max-width: 768px){
    margin-top: 5vh;
    }
`

export const UserPhoto = styled.div`
  background: gray;
  height: 15vw;
  width: 15vw;
  border-radius: 100%;
  cursor: pointer;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 5vh;

  @media (min-width: 770px){
    margin-top: 0;
    }
`;

export const UserPhotoAlternative = styled.h1`
  height: 100%;
  width: 100%;
  text-align: center;
  font-weight: bolder;
  font-size: 10vw;
  vertical-align: middle;
  color: white !important;
  text-decoration: none;
  margin-top: 5vh;
`;

export const Title = styled.h1`
  position: relative;
  text-align: center;
  font-size: 2vw;

  @media (max-width: 1225px){
    font-size: 3vw;
    }
  @media (max-width: 426px){
    font-size: 4vw;
    }
`

export const Description = styled.p`
  position: relative;
  text-align: center;
  font-size: 1vw;

  @media (max-width: 1225px){
    font-size: 2vw;
    }
  @media (max-width: 426px){
    font-size: 3vw;
    }
`


export const Changer = styled.div`
    width: 25vw;
    height: 5vh;
    margin-top: 5vh;
    margin-bottom: 3vh;
    right: 15vw;
    position: absolute;
    @media (max-width: 768px){
      width: 25vw;
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
    color: ${props => props.lettercolors ? 'white' : 'orange' };
    cursor: pointer;
    z-index: 1;

    @media (max-width: 768px){
        font-weight: 2vw
    }
    @media (max-width: 426px){
        font-weight: 1vw
    }
`

export const Blogs = styled(Activity)`
    float: right;
`

export const ButtonMode = styled.div`
    position: absolute;
    width: 8vw;
    height: 5vh;
    background: blue;
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