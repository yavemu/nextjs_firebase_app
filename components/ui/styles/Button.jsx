import styled from '@emotion/styled';

const Button = styled.a`
    font-weight: 400;
    text-transform: capitalize;
    border: 1px solid var(--primary-border-color);
    border-radius: .6rem;
    padding: .8rem  2rem;
    text-align: center;
    margin-left: ${props => props.noMargin ? '0rem' : '.5rem'};
    margin-right: ${props => props.noMargin ? '0rem' : '.5rem'};
    display: ${props => props.displayBlock ? 'block' : 'inline-block'};
    background-color: ${props => props.btnSecondary ? 'var(--secondary-bottom-color)' : 'var(--primary-bottom-color)'};
    color: ${props => props.btnSecondary ? 'white' : 'black'};
    width: ${props => props.widthMiddle ? '50%' : 'inherit'}; 
    height: 4rem;

    &:last-of-type {
        margin-right: 0
    }

    &:hover{
        border: 1px solid var(--secondary-border-color);
        font-weight: bolder;
    }
`;

export default Button;