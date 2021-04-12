import React, { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Container,Form,FormButton,FormContent,FormH1,FormInput,FormLabel,FormWrap,Icon,Text, FormError, FormMessage } from './ForgotPassword.elements'

const ForgottenPassword = () => {

    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
  
    async function handleSubmit(e) {
      e.preventDefault()
  
      try {
        setMessage('')
        setError("")
        setLoading(true)
        await resetPassword(emailRef.current.value)
        setMessage('Check your inbox for further insturcitons.')
      } catch {
        setError("Failed to reset password")
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
                        <FormH1>Reset your password</FormH1>
                        {error && <FormError>{error}</FormError>}
                        {message && <FormMessage>{message}</FormMessage>}
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required ref={emailRef}/>
                        <FormButton type='submit' disabled={loading}>Continue</FormButton>
                        <Text to="signup">Don't have an account yet?</Text>
                        <Text to="signin">Back to login</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
    )
}

export default ForgottenPassword
