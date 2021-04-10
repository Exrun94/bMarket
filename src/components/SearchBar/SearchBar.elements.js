import styled from 'styled-components'

export const Container = styled.div`
    margin-bottom: 64px;
    display: flex;
    align-items: center;
    width: 300px;
`;

export const Input = styled.input`
    background: #222531;
    color: #e2e2e2;
    border: none;
    padding: 16px;
    border-radius: 4px;
    outline: none;
    height: 100%;
    width: 100%;

    ::placeholder {
        color: #e2e2e2;
    }
`;