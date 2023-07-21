import { styled } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--white-menus);
  width: 500px;
  height: 100vh;
  min-height: 100vh;
  overflow-y: scroll;
  position: absolute;
  top: 0px;
  right: 0;
  font-family: 'Roboto Condensed', sans-serif;
  border: 1px solid var(--grey-dark);
  box-shadow: 10px 10px 10px var(--shadows);
  gap: 20px;
  padding: 20px 15px;
  z-index: 4;
  transform: translateX(${({ show }) => (show ? "0" : "1000px")});
  opacity: ${({ show }) => (show ? "1" : "0")};
  transition: all ease 0.2s;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 967px){
    width: 100%;
  }
`;
export const CartTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: first baseline;
`;

export const CloseCart = styled(AiOutlineClose)`
  align-self: flex-start;
  padding: 10px 13px;
  font-size: 40px;
  color: black;
  cursor: pointer;
  opacity: 1;
  border-radius: 0%;
  border-radius: 50%;
  transition: all ease 0.4s;
  align-self: flex-start;

  &:hover {
    background-color: var(--grey-dark);
    opacity: 0.8;
    transition: all ease-out 0.4s;
  }
`;

export const CartTitle = styled.h3`
  text-align: center;
  font-size: 25px;
  border-bottom: 2px solid black;
  padding: 10px;
  width: 100%;
`;


export const CartCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 15px;
  height: auto;
  

  h2 {
    font-size: 18px;
    font-weight: 500;
    font-family: 'Roboto Condensed', sans-serif;
  }
`;

export const CartShippingAndSub = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  gap: 15px;
`;
export const ShipOrSubDiv = styled.div`
  display: flex;
   justify-content: space-between;
  width: 100%;
`;
export const ShipOrSubTextLeft = styled.p`
font-size: 18px;
  font-weight: 600;
  font-family: 'Roboto Condensed', sans-serif;
`;

export const CartBottomContain = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto Condensed', sans-serif;
  border-top: 2px solid black;
`;

export const CartBottomTextLeft = styled.h3`
  font-size: 22px;
  font-weight: 800;
  padding: 10px;
  

  @media (max-width: 768px){
    font-size: 28px;
  }
  @media (max-width: 480px){
    font-size: 26px;
  }
  @media (max-width: 400px){
    font-size: 24px;
  }
`;
export const CartBottomTextRight = styled.h3`
  font-size: 22px;
  font-weight: 800;
  

  @media (max-width: 768px){
    font-size: 28px;
  }
  @media (max-width: 480px){
    font-size: 26px;
  }
  @media (max-width: 400px){
    font-size: 24px;
  }
`;

export const CartBottomBtns = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px){
    gap: 15px;
  }
  @media (max-width: 480px){
    gap: 10px;
  }
`;


export const CartBtnConfirm = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 17px;
  font-weight: 600;
  padding: 7px 20px;
  border: 4px solid;
  border-radius: 15px;
  cursor: pointer;
  transition: all ease 0.3s;
  font-family: 'Roboto Condensed', sans-serif;
  background-color: black;
  color: white;
  

  &svg {
    pointer-events: none;
  }

  &:hover {
    opacity: 0.8;
    transition: all ease-out 0.3s;
  }

  @media (max-width: 768px){
    padding: 10px 20px;
    font-size: 18px;
  }

  @media (max-width: 480px){
    padding: 8px 15px;
    font-size: 16px;
  }
`;