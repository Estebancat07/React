import { styled } from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

export const SuccessContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  padding: 10px 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  background-color: white;
  
 

  h1 {
    font-family: "Under-Rated";
    color: crimson;
    text-align: center;
    font-size: 25px;
    text-shadow: 1px 1px 1px var(--soft-black);

    @media (max-width: 1024px) {
      font-size: 36px;
    }
    @media (max-width: 768px) {
      font-size: 30px;
    }
    @media (max-width: 480px) {
      font-size: 26px;
    }
    @media (max-width: 400px) {
      font-size: 22px;
    }
  }

  @media (max-width: 1024px){
    padding: 40px 60px;
  }
  @media (max-width: 768px){
    padding: 40px;
    justify-content: center;
    gap: 70px;
  }

  @media (max-width: 480px){
    padding: 30px;
    gap: 50px;
    justify-content: center;
  }

  @media (max-width: 400px){
    padding: 20px;
  }
`;
export const SuccesDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  

  h2 {
    color: black;
    font-size: 20px;
    font-family: 'Roboto Condensed', sans-serif;
    text-align: center;
   

    @media (max-width: 768px) {
      font-size: 24px;
    }
    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  @media (max-width: 550px){
    flex-wrap: wrap;
  }
`;

export const SuccessIcon = styled(FaCheckCircle)`
  font-size: 25px;
  color: var(--green-light);
  filter: drop-shadow(-3px 3px 2px var(--shadows));

  @media (max-width: 768px){
    font-size: 54px;
  }

  @media (max-width: 480px){
    font-size: 50px;
  }
`;

export const SuccesOrder = styled.div`
  background-color: white;
  box-shadow: -4px 4px 6px var(--shadows);
  min-width: 200px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
 

  h3 {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 24px;
    color: black;

    @media (max-width: 768px){
      font-size: 22px;
    }
    @media (max-width: 480px){
      font-size: 20px;
    }
    @media (max-width: 400px){
      font-size: 18px;
    }
  }

  span {
    color: black;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 22px;

    @media (max-width: 768px){
      font-size: 22px;
    }
    @media (max-width: 480px){
      font-size: 20px;
    }
  }

  @media (max-width: 768px){
    padding: 10px 15px;
  }
  @media (max-width: 480px){
    padding: 10px;
    min-width: fit-content;
  }
`;
export const SuccessBtns = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 8px;

  button:nth-child(2) {
    font-family: 'Roboto Condensed', sans-serif;
    color: white;
    background-color: black;
    

    &:hover {
      background-color: gainsboro;
      font-family: 'Roboto Condensed', sans-serif;
      transition: all ease 0.2s;
      color: black;
    }
  }

  button {
    outline: none;
    border: none;
    background-color: black;
    color: white;
    padding: 10px 10px;
    border-radius: 25px;
    font-weight: 600;
    font-size: 17px;
    font-family: 'Roboto Condensed', sans-serif;
    cursor: pointer;
    filter: drop-shadow(-4px 4px 6px var(--shadows));

    transition: all ease-in 0.2s;

    &:hover {
      background-color: green;
      transition: all ease 0.2s;
      color: black;
    }

    @media (max-width: 768px){
      padding: 10px 15px;
      font-size: 18px;
    }
    @media (max-width: 480px){
      padding: 10px;
      font-size: 16px;
    }
    @media (max-width: 400px){
      padding: 5px;
    }
  }

  @media (max-width: 768px){
    width: 60%;
  }
  @media (max-width: 480px){
    width: 80%
  }

  
`;

export const Successbox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
padding: 20px;
height: 500px;
width: 600px;
background-color: gainsboro;
border-radius: 400px;
gap: 20px;
`