import { styled } from "styled-components";

export const CardsProductsContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 20px 0px;
    flex-wrap: wrap;
    gap: 30px;
    transition: all ease 0.25s;
`

export const PaginationContainer = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    justify-content: center;
    align-items: center;
    

    @media (max-width: 768px){
        justify-content: center;
    }

    @media (max-width: 650px){
        align-items: flex-start;
    }
`
export const PaginateBtn = styled.button`
    display: flex;
    gap: 10px;
    font-size: 18px;
    font-weight: 600;
    align-items: center;
    padding: 10px 20px;
    outline: none;
    border: 1px solid ${({secondary})=> (secondary? 'var(--white)' : 'var(--black)')};
    background-color: ${({secondary})=> (secondary? 'var(--black)' : 'var(--white)')};
    color: ${({secondary})=> (secondary? 'var(--white)' : 'var(--black)')};
    box-shadow: 4px 4px 6px var(--shadows);
    cursor: pointer;
    transition: all ease .1s;
    border-radius: 40px;
    

    &:disabled{
        background-color: ${({secondary})=> (secondary && 'var(--grey-dark)')};
        color: ${({secondary})=> (secondary? 'var(--grey-light)' : 'var(--grey-dark)')};
        cursor: not-allowed;
        border-color: ${({secondary})=> (secondary? 'var(--grey-dark)' : 'var(--grey-light)')};
        transition: all ease-in .1s;
    }

    &:hover{
        opacity: 1;
        transition: all .1s ease;
    }

    @media (max-width: 650px){
        padding: 10px;
    }

    @media (max-width: 400px){
        font-size: 16px;
    }
`
