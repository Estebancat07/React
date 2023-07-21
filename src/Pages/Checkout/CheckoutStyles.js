import { FaCircleNotch } from "react-icons/fa";
import { styled } from "styled-components";


export const CheckoutContainBG = styled.div`
  margin-top: 80px;
  width: 100%;
  min-height: 700px;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 20px;
  max-width: 1300px;
  align-items: flex-start;
  padding: 20px;
  z-index: 2;

  @media (max-width: 967px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerVertical = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  padding: 20px;
  gap: 30px;

  h1 {
    color: black;
    font-size: 22px;
    font-weight: 900;
    text-align: center;
    text-shadow: 4px 6px 8px black;

    @media (max-width: 1024px) {
      text-align: center;
    }

    @media (max-width: 967px) {
      width: 100%;
      max-width: 900px;
    }
    @media (max-width: 768px){
      font-size: 26px;
    }
    @media (max-width: 480px){
      font-size: 24px;
    }
    @media (max-width: 400px){
      font-size: 22px;
    }
  }
`;
export const RightTitleText = styled.h2`
text-align: center;
  color: black;
  font-size: 18px;
  font-family: 'Roboto Condensed', sans-serif;
  text-shadow: -1px 1px 1px var(--grey-light);
  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 768px){
    font-size: 22px;
  }
  @media (max-width: 480px){
      font-size: 20px;
    }
    @media (max-width: 400px){
      font-size: 18px;
    }
`;

export const LeftContainer = styled.div`
  border: 1px solid var(--grey-dark);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  background-color: var(--white-menus);
  padding: 10px;
  box-shadow: -5px 10px 6px var(--shadows), 5px 10px 6px var(--shadows);


  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 100%;
    flex-wrap: wrap;

    @media (max-width: 1024px) {
      flex-direction: column;
    }

    @media (max-width: 967px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }

    @media (max-width: 550px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }
`;

export const InputContainer = styled.div`
  padding: 15px;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  gap: 15px;

  label {
    color: black;
    font-size: 18px;
    font-weight: 600;

    @media (max-width: 1024px) {
      text-align: center;
      width: 100%;
    }

    @media (max-width: 768px){
      font-size: 20px;
    }
    @media (max-width: 480px){
      font-size: 18;
    }
  }

  input {
    border: none;
    outline: none;
    border-bottom: 2px solid black;
    width: 100%;
    background-color: transparent;
    padding: 10px;
    font-size: 15px;
    transition: all ease 0.15s;
    position: relative;
    text-overflow: ellipsis;

    @media (max-width: 768px){
      font-size: 18px;
    }
  
  }

  input:focus {
    border-color: black;
    transition: all ease 0.15s;
  }

  input::placeholder {
    
    transform: scale(1);
    transition: all ease 0.15s;
    position: absolute;
    text-align: left;
  }

  input:focus::placeholder {
    font-size: 20px;
    top: -5px;
    left: -18px;
    transform: scale(0.6);
    transition: ease-in 0.15s;
    color: green;
}
  p {
    margin-top: -5px;
    text-align: right;
    color: var(--red);
    font-size: 12px;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const InputSubmit = styled.div`
  width: 100%;
  grid-column-start: 1;
  grid-column-end: span 2;
  button {
  
    background-color: black;
    color: white;
    font-weight: 600;
    width: 100%;
    padding: 5px 10px;
    font-size: 17px;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
    transition: all ease 0.15s;

    @media (max-width: 768px){
      font-size: 20px;
    }
    @media (max-width: 480px){
      font-size: 18px;
    }
    @media (max-width: 400px){
      font-size: 16px;
    }
  }

  button:hover {
    background-color:lightgreen;
    color: black;
   
  }

  button:disabled {
    background-color: gainsboro;
    color: black;
    cursor: not-allowed;
  }

  @media (max-width: 967px) {
    grid-column-start: 1;
    grid-column-end: span 2;
  }
`;
export const RightContainer = styled(LeftContainer)`
  gap: 30px;
  padding-top: 20px;
`;

export const ItemsCartContainer = styled.div`
  border-top: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  height: auto;
  overflow-y: scroll;
  gap: 30px;
  border-bottom: solid 1px black;
  border-radius: 10px;

  @media (max-width: 768px){
    height: 400px;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  h4 {
    text-align: center;
    margin-top: 50px;
  }
`;

export const BottomPriceDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  padding: 10px 20px;
`;

export const SubtotalDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-weight: 600;
    color: black;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 16px;

    @media (max-width: 768px){
      font-size: 18px;
    }
    @media (max-width: 480px){
      font-size: 16px;
    }
  }

  span {
    color: black;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 16px;
 
    @media (max-width: 768px){
      font-size: 18px;
    }
    @media (max-width: 480px){
      font-size: 16px;
    }
  }

  @media (max-width: 400px){
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

`;

export const TotalPriceDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 2px solid black;
  padding-top: 10px;

  h4 {
    color: black;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 20px;

    @media (max-width: 768px){
      font-size: 18px;
    }
    @media (max-width: 480px){
      font-size: 16px;
    }
  }

  span {
    color: black;
    font-weight: 600;
    font-size: 20px;

    @media (max-width: 768px){
      font-size: 18px;
    }
    @media (max-width: 480px){
      font-size: 16px;
    }
  }
`;

export const LoadIcon = styled(FaCircleNotch)`
  color: var(--white);
  font-size: 24px;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }


  animation: rotate infinite 0.8s ease-in forwards;

  @media (max-width: 768px){
    font-size: 22px;
  }

  @media (max-width: 480px){
    font-size: 20px;
  }

  @media (max-width: 400px){
    font-size: 18px;
  }
`;