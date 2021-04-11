import React, { useRef, useState } from 'react'
import { Container,Form,FormButton,FormContent,FormH1,FormInput,FormLabel,FormWrap,Icon,Text, FormError } from './SignIn.elements'
import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from "react-router-dom"


const SignIn = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
  
    async function handleSubmit(e) {
      e.preventDefault()
  
  
      try {
        setError("")
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        history.push("/")
      } catch {
        setError("Failed to sign in")
      }
  
      setLoading(false)
    }
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">bMarket</Icon>
                    <FormContent>
                        <Form onSubmit={handleSubmit}>
                            <FormH1>Sign in to your account</FormH1>
                            {error && <FormError>{error}</FormError>}
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required ref={emailRef}/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required ref={passwordRef} />
                            <FormButton type='submit' disabled={loading}>Continue</FormButton>
                            <Text to="signup">Don't have an account yet?</Text>
                            <Text to="forgot-password">Forgot password?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn
