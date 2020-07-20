import styled from '@emotion/styled';

const Button = styled.a`
    font-weight: 400;
    text-transform: capitalize;
    border: 1px solid var(--primary-border-color);
    border-radius: .6rem;
    padding: .8rem  2rem;
    margin-left: .5rem;
    margin-right: .5rem;
    background-color: ${props => props.btnSecondary ? 'var(--secondary-bottom-color)' : 'var(--primary-bottom-color)'};
    color: ${props => props.btnSecondary ? 'white' : 'black'};

    &:last-of-type {
        margin-right: 0
    }

    &:hover{
        border: 1px solid var(--secondary-border-color);
        font-weight: bolder;
    }
`;

export default Button;