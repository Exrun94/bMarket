import React, { useRef, useState } from 'react'
import { Container,Form,FormButton,FormContent,FormH1,FormInput,FormLabel,FormWrap,Icon,Text, FormError } from './UpdateProfile.elements'
import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from "react-router-dom"


const UpdateProfile = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const repeatPasswordRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
  
    function handleSubmit(e) {
      e.preventDefault()
    
      if (passwordRef.current.value !== repeatPasswordRef.current.value) {
        return setError("Passwords do not match")
      }

      const promises = []
      setLoading(true)
      setError("")

      if(emailRef.current.value !== currentUser.email) {
          promises.push(updateEmail(emailRef.current.value))
      }

      if(passwordRef.current.value) {
          promises.push(updatePassword(passwordRef.current.value))
      }
      
      Promise.all(promises).then(() => {
          history.push('/')
      }).catch(() => {
          setError('Failed to update')
      }).finally(() => {
          setLoading(false)
      })

      }

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">bMarket</Icon>
                    <FormContent>
                        <Form onSubmit={handleSubmit}>
                            <FormH1>Update Profile</FormH1>
                            {error && <FormError>{error}</FormError>}
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required ref={emailRef} defaultValue={currentUser.email}/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' ref={passwordRef} placeholder="Leave blank to keep the same password" />
                            <FormLabel htmlFor='for'>Repeat password</FormLabel>
                            <FormInput type='password' ref={repeatPasswordRef} placeholder="Leave blank to keep the same password"/>
                            <FormButton type='submit' disabled={loading}>Continue</FormButton>
                            <Text to="/">Cancel</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default UpdateProfile
