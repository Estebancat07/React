import { styled } from "styled-components";


export const OrderBGContainer = styled.div`
  width: 100%;
  margin-top: 80px;
  height: auto;
  min-height: 700px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const OrdersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  width: 100%;
  padding: 60px 40px;
  min-height: 700px;
  max-width: 1300px;
 

  h1 {
    text-align: center;
    font-family: "Roboto, sans-serif;";
    color: black;
    font-size: 24px;
    text-shadow: 4px 6px 8px black;

    @media (max-width: 1024px) {
      font-size: 30px;
    }
    @media (max-width: 768px) {
      font-size: 28px;
      text-align: center;
    }
    @media (max-width: 480px) {
      font-size: 26px;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 800px;

  button {
    outline: none;
    
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 20px;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 600;
    color: black;
    text-align: center;
    cursor: pointer;
    transition: all ease 0.2s;
    border-radius: 30px;

    &:hover {
      background-color:crimson;
      color: black;
    }

    @media (max-width: 768px) {
      font-size: 18px;
    }
    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`;

export const OrdersLists = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: -4px 4px 6px var(--shadows), 4px 4px 6px gray;
  padding: 10px;
  gap: 20px;
  border-radius: 20px;

  max-width: 700px;
  width: 100%;
  min-height: 300px;
  max-height: 500px;

  @media (max-width: 768px){
    padding: 15px;
  }

  @media (max-width: 480px){
    padding: 10px;
  }
`;

export const OrdersListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  max-width: 700px;
  width: 100%;
  max-height: 400px;
  overflow-y: scroll;
  

  &::-webkit-scrollbar{
    display: none;
  }

`;

export const NoOrderText = styled.p`
  font-size: 30px;
  color: black;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  margin-top: 10px;
  text-align: center;
  
  
`;
export const RightContainer = styled(LeftContainer)`
  max-width: 600px;

  @media (max-width: 1024px){
    width: 100%;
  }
`;