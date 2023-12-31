import { styled } from "styled-components";

export const AboutContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
  gap: 20px;
  
 
`;


export const BenefitsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  height: auto;

  @media (max-width: 768px){
  
    align-items: center;
    justify-items: center;
    gap: 20px;


  }


`;

export const BenefitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border: 1px solid var(--white-menus);
  background-color: #E5E5E1;
  box-shadow: -3px 6px 6px black;
   border-radius: 40px;
  padding: 10px 5px;
  backdrop-filter: blur(5px);
  transform: scale(1);
  transition: all 0.3s ease;

  p {
     padding-top: 15px;
    font-size: 14px;
    font-weight: 500;
    color: black;
    font-family: 'Roboto Condensed', sans-serif;
    pointer-events: none;
  }

  &:hover {
    transform: scale(1.04);
    filter: drop-shadow(4px 4px 10px black);
  }

  @media (max-width: 1030px){
    width: 180px;
    height: 180px;
  }
  @media (max-width: 700px){
    width: 150px;
    height: 150px;
    
  }
`;