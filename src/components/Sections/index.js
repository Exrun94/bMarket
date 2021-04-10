import React from 'react'
import { ButtonLink } from '../Button.element'

import { 
    ButtonWrapper,
    Column1,
    Column2,
    Container,
    Heading,
    Img,
    ImgWrapper,
    Row,
    SubHeading,
    Subtitle,
    TextWrapper,
    Wrapper,
 } from './Sections.elements'

const Sections = ({lightBg, id, imgStart, heading, lightText, subheading, darkText, subtitle, buttonLabel, img, alt, dark, dark2, primary}) => {
    return (
        <>
            <Container lightBg={lightBg} id={id}>
                <Wrapper>
                    <Row imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Heading>{heading}</Heading>
                                <SubHeading lightText={lightText}>{subheading}</SubHeading>
                                <Subtitle darkText={darkText}>{subtitle}</Subtitle>
                                <ButtonWrapper>
                                    <ButtonLink 
                                    to="signin" 
                                    smooth={true} 
                                    duration={500} 
                                    spy={true}
                                    exact="true" 
                                    offset={-80} 
                                    primary={primary ? 1 : 0} 
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</ButtonLink>
                                </ButtonWrapper>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrapper>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </Column2>
                    </Row>
                </Wrapper>
            </Container>
        </>
    )
}

export default Sections
