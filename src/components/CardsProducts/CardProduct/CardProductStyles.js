import Select from "react-select";
import { styled } from "styled-components";

export const CardProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color:gainsboro;
  border: 1px solid gray;
  gap: 10px;
  width: 80%;
  max-width: 400px;
  height: 500px;
  border-radius: 40px;
  box-shadow: -3px 6px 6px black;
  backdrop-filter: blur(5px);
  transform: scale(1);
  transition: all 0.3s ease;
`;

export const CardProductMidContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const CardProductPrices = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  span {
    color: var(--grey-dark);
    text-decoration: line-through;
    font-size: 14px;
  }

  p {
    color: var(--red);
    font-size: 14px;
    padding: 5px 5px 5px 20px;
    background-color: var(--grey-light);
    position: relative;
    border: 1px solid var(--black);
  }

  p::before {
    content: "";
    position: absolute;
    right: auto;
    border: 1px solid var(--black);
    top: 8px;
    left: 4px;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: var(--white);
  }
`;

export const CardProductBottomContainer = styled(CardProductMidContainer)``;

export const BtnAddToCart = styled.button = styled.button`
    width: 100%;
    padding: 10px 20px;
    color:black;
    border-radius: 15px;
   background-color: #8cc3d4;
    font-size: 18px;
    font-weight: 500;
    outline: none;
    transition: all ease .15s;
    cursor: pointer;

    &:hover{
      transition: all ease-in .15s;
      background-color: lightgreen;
    }
`

export const SelectStyled = styled(Select)`
  z-index: 2;
`
