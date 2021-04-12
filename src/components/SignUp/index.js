import React, { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from "react-router-dom"
import { Container,Form,FormButton,FormContent,FormH1,FormInput,FormLabel,FormWrap,Icon,Text, FormError } from './SignUp.elements'


const SignUp = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const repeatPasswordRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
  
    async function handleSubmit(e) {
      e.preventDefault()
  
      if (passwordRef.current.value !== repeatPasswordRef.current.value) {
        return setError("Passwords do not match")
      }

      if(passwordRef.current.value.length < 6) {
          return setError('Password must be at least 6 charcters')
      }
  
      try {
        setError("")
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
        history.push("/")
      } catch {
          console.log(emailRef.current.value, passwordRef.current.value)
        setError("Failed to create an account")
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
                            <FormH1>Sign up with new account</FormH1>
                            {error && <FormError>{error}</FormError>}
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required ref={emailRef} />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required ref={passwordRef} />
                            <FormLabel htmlFor='for'>Repeat password</FormLabel>
                            <FormInput type='password' required ref={repeatPasswordRef}/>
                            <FormButton type='submit' disabled={loading}>Continue</FormButton>
                            <Text to="signin">Already have an account?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignUp
