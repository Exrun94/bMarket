import React from 'react'
import { Container,Form, FormContent,FormH1, FormWrap,Icon,Text, FormError, Img } from './ClaimBonus.elements'
import { useAuth } from '../../contexts/AuthContext'
import Icon9 from '../../images/svg-9.svg'


const ClaimBonus = () => {

    const { } = useAuth()

  
    

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">bMarket</Icon>
                    <FormContent>
                        <Form>
                            <FormH1>Bonus claimed!</FormH1>
                            <Img src={Icon9} />
                            <Text to="/">Go back</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default ClaimBonus
