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
    max-width: 956px;
  }

  @media (max-width: 768px) {
    max-width: 600px;
  }

  @media (max-width: 480px) {
    max-width: 400px;
  }

  @media (max-width: 320px) {
    max-width: 320px;
  }
`;




