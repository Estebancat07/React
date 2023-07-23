import { styled } from "styled-components";
import BackgroundBG from "../../assets/imgs/hero/portada.jpg";


export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  width:100%;
  height: 800px;
  background-image: url("${BackgroundBG}");
  background-size: contain;
  background-repeat: no-repeat;



  @media (max-width: 1100px) {
    max-width: 700px;
    height: 400px;
    
  }

  @media (max-width: 900px) {
    max-width: 600px;
    height: 300px;
    
  }

  @media (max-width: 768px) {
    max-width: 550px;
    height: 300px;
  }

  @media (max-width: 480px) {
    max-width: 400px;
    height: 250px;
  }

  @media (max-width: 320px) {
    max-width: 320px;
    height: 200px;
  }
`;




