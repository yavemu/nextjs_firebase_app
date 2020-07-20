import styled from '@emotion/styled';

export const Form = styled.form`
    max-width: 600px;
    width: 95%;
    margin: 5rem auto 0 auto;
`;

export const Field = styled.div`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;

    label {
        flex: 0 0 30%;
        font-size: 1.8rem;
    }

    input {
        flex: 1;
        padding: 1rem;
    }
`

export const InputSubmit = styled.input`
    background-color: var(--primary-bottom-color);
    border: 1px solid var(--primary-bottom-color);
    width: 100%;
    padding: 1.5rem;
    text-align: center;
    color: var(--primary-background-color);
    font-size: 1.8rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    cursor: pointer;
    
    &:hover{
        border: 1px solid black;
    }
`