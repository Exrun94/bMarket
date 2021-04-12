import React, { useState } from 'react'
import BgVideo from '../../videos/video.mp4'
import { ButtonLink } from '../Button.element'
import { useAuth } from '../../contexts/AuthContext'
import { LandingContainer, Background,Video,Content,H1,P,ButtonWrapper,ArrowForward,ArrowRight,} from './LandingView.elements'


const LandingView = () => {

    const [hover, setHover] = useState(false)
    const { balance, claimedBalance, currentUser } = useAuth()

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            {!currentUser && <LandingContainer id="home">
            <Background>
                <Video autoPlay loop muted src={BgVideo} type='video/mp4' />
            </Background>
            <Content>
                <H1>Buying Crypto currencies made easy!</H1>
                <P>Sign up for a new account today and receive up to $250 in credit towards your next purchase.</P>
                <ButtonWrapper>
                <ButtonLink 
                    to="signup"
                    primary="true"
                    dark="true" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    duration={500}
                    exact='true'
                    offset={-80}
                    >Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </ButtonLink>
                </ButtonWrapper>
            </Content>
        </LandingContainer>}

        {currentUser && <LandingContainer id="home">
            <Background>
                <Video autoPlay loop muted src={BgVideo} type='video/mp4' />
            </Background>
            <Content>
                <H1>Buying Crypto currencies made easy!</H1>
                {!balance?.[0]?.claimed && <P>Thank you for registering! Claim your $250 below</P>}
                {!balance?.[0]?.claimed && <ButtonWrapper>
                <ButtonLink
                    onClick={claimedBalance}
                    to="claim-bonus"
                    primary="true"
                    dark="true" 
                    duration={500}
                    exact='true'
                    offset={-80}
                    >Claim $250 {hover ? <ArrowForward /> : <ArrowRight />}
                    </ButtonLink>    
                </ButtonWrapper>
                }
            </Content>

        </LandingContainer>}
    </>
    )
}

export default LandingView
