import React from 'react'
import { 
    Container,
    Form,
    FormButton,
    FormContent,
    FormH1,
    FormInput,
    FormLabel,
    FormWrap,
    Icon,
    Text
 } from './SignUp.elements'

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">bMarket</Icon>
                    <FormContent>
                        <Form action>
                            <FormH1>Sign up with new account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormLabel htmlFor='for'>Repeat password</FormLabel>
                            <FormInput type='repeat-password' required />
                            <FormButton type='submit'>Continiue</FormButton>
                            <Text to="signin">Already have an account?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn
