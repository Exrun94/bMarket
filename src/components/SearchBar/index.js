import React, {useState} from 'react'
import { Container, Input } from './SearchBar.elements'

const SearchBar = ({...rest}) => {

    const [search, setSearch] = useState('');


    return (
        <>
            <Container>
                <Input {...rest} />
            </Container>
        </>
    )
}

export default SearchBar;
