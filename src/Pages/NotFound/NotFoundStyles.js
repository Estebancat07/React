import { styled } from "styled-components";
import BackgroundIMG from "../../assets/imgs/notfound/404.jpg";

export const NotFoundContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: url("${BackgroundIMG}");
  width: 100%;
  height: calc(100vh - 80px);
  padding: 40px 60px;
  gap: 40px;



  button {
    width: 200px;
    border: none;
    outline: none;
    padding: 10px 20px;
    color: var(--white);
    font-size: 24px;
    background-color: gray;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    font-weight: 600;
    transition: all ease .2s;

    &:hover{
        background-color: lightgreen;
        color: black;
    }

    @media (max-width: 768px){
        font-size: 22px;
        width: 60%;
    }
    @media (max-width: 480px){
        font-size: 20px;
        width: 80%;
    }
  }

  @media (max-width: 768px){
    padding: 40px 20px;
  }

  @media (max-width: 480px){
    padding: 20px;
  }
`;

