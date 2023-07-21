import { styled } from "styled-components";

export const OrdersResumeContainer = styled.div`
  padding: 10px 40px;
  border-radius: 5px;
  box-shadow: -4px 4px 6px var(--shadows), 4px 4px 6px gray;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;

  img {
    height: 80px;
    width: 80px;
    border: 1px solid black;
    border-radius: 80px;
    padding: 1px;
    background-color: crimson;

    @media (max-width: 768px) {
        width: 60px;
        height: 60px;
    }
  }

  @media (max-width: 1024px){
    padding: 20px;
  }

  @media (max-width: 768px){
    padding: 15px;
  }

  @media (max-width: 480px){
    padding: 10px;
    flex-direction: column;
  }
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-size: 20px;
    font-family: 'Roboto Condensed', sans-serif;
    color: black;

    @media (max-width: 768px) {
      font-size: 20px;
    }
    @media (max-width: 480px) {
      font-size: 18px;
      text-align: center;
    }
    @media (max-width: 400) {
      font-size: 16px;
    }
  }

  p {
    font-family: 'Roboto Condensed', sans-serif;
    color: var(--black);
    font-size: 14px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 14px;
    }
    @media (max-width: 480px){
      text-align: center;
    }

  }

  span{
    color: black;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 16px;
    

    @media (max-width: 768px) {
      font-size: 14px;
    }
    @media (max-width: 480px){
      text-align: center;
    }
  }
`;
export const RightContainer = styled(LeftContainer)`
  flex-direction: row;
  align-items: center;

  p {
    color: var(--black);
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 800;
    font-size: 12px;

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 480px){
      text-align: center;
    }
  }

  span {
    color: black;
    font-size: 14px;
    font-weight: 800;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;
