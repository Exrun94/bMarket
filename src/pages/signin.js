import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import SignIn from '../components/SignIn'
import { withRouter } from 'react-router-dom'


const SignInPage = () => {
    return (
        <>
            <ScrollToTop />
            <SignIn />
        </>
    )
}

export default withRouter(SignInPage)
