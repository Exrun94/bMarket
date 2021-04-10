import React from 'react'
import { Container, Input } from './SearchBar.elements'

const SearchBar = ({...rest}) => {
    return (
        <>
            <Container>
                <Input {...rest} />
            </Container>
        </>
    )
}

export default SearchBar;
