import { styled } from "styled-components";
import { FaBackspace} from "react-icons/fa";

export const HeadProductsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
  width: 100%;
  max-width: 1300px;
  padding: 20px;

  @media (max-width: 1150px){
    justify-content: center;
  }

   @media (max-width: 1024px){
    justify-content: center;
  }

  @media (max-width: 800px){
   
    align-items: center;
    justify-items: center;
  }

  @media (max-width: 400px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`
export const BtnBack = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  justify-self: flex-end;
  position: relative;
`
export const BtnBackIcon = styled(FaBackspace)`
  font-size: 50px;
  color: red;
  pointer-events: none;

  @media (max-width: 1024px){
    font-size: 46px;
  }

   @media (max-width: 768px){
    font-size: 40px;
  }

   @media (max-width: 480px){
    font-size: 36px;
  }
  
`