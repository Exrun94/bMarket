import React, {useState} from 'react'
import BgVideo from '../../videos/video.mp4'
import { Button } from '../Button.element'

import { 
    LandingContainer, 
    Background,
    Video,
    Content,
    H1,
    P,
    ButtonWrapper,
    ArrowForward,
    ArrowRight,
 } from './LandingView.elements'

const LandingView = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <LandingContainer>
            <Background>
                <Video autoPlay loop muted src={BgVideo} type='video/mp4' />
            </Background>
            <Content>
                <H1>Buying Crypto currencies made easy!</H1>
                <P>Sign up for a new account today and receive up to $250 in credit towards your next purchase.</P>
                <ButtonWrapper>
                <Button 
                    to="signup"
                    primary="true"
                    dark="true" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </ButtonWrapper>
            </Content>
        </LandingContainer>
    )
}

export default LandingView
