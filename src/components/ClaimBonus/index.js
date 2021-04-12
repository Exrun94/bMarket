import React from 'react'
import Icon9 from '../../images/svg-9.svg'
import { Container,Form, FormContent,FormH1, FormWrap,Icon,Text, Img } from './ClaimBonus.elements'

const ClaimBonus = () => {

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
