//It's fun use React Lottie

import React from 'react'
import {Link} from 'react-router-dom'
import {Title, Text, Container, AnimationContainer, TryButton,SecondContainer, SecondAnimationContainer} from './styles'
import FirstAnimation from './firstanimation'
import SecondAnimation from './secondanimation'
import './lottiestyles.css'

//Yes this is so broken --- Fuck....

const textexample = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '

export default class AnimationIntro extends React.Component {

    render() {
   
        return (
            <div className="AnimatedIntro">
                <Container>
                    <Title>📗It's time to write about your adventures✈️</Title>
                    <Text>{textexample}</Text>
                    <Link to='/create'>
                        <TryButton variant="success">
                        Go to create a Blog !!!
                        </TryButton>
                    </Link>      
                </Container>
                <AnimationContainer>
                    <FirstAnimation/>
                </AnimationContainer>
                <SecondContainer>
                    <Title>🌎This is the World Blogs🌎</Title>
                    <Text>{textexample}</Text>
                    <Link to='/blogs'>
                        <TryButton variant="success">
                                    Let's see the Blogs
                        </TryButton>
                    </Link>
                </SecondContainer>
                <SecondAnimationContainer>
                    <SecondAnimation />
                </SecondAnimationContainer>
                
                
            </div>
        )
}}



