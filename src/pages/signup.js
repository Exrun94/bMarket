import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import SignUp from '../components/SignUp'
import { withRouter } from 'react-router-dom'

const SignUpPage = () => {
    return (
        <>
            <ScrollToTop />
            <SignUp />
        </>
    )
}

export default withRouter(SignUpPage)
