import { styled } from "styled-components";

export const LoginWrapper = styled.div`

  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (max-width: 768px){
    padding: 40px 20px 60px 20px;
  }

  @media (max-width: 480px){
    padding: 40px 10px 60px 10px;
  }
`;

export const LoginTitle = styled.h1`
  font-size: 24px;
  color: black;
  text-align: center;
  font-family: "Roboto, sans-serif;";

  @media (max-width: 1024px){
    font-size: 42px;
  }
  @media (max-width: 768px){
    font-size: 38px;
  }
  @media (max-width: 480px){
    font-size: 34px;
  }
  @media (max-width: 400px){
    font-size: 30px;
  }
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    align-items: center;
    gap: 20px;
    background-color: white;
    box-shadow: -6px 6px 6px var(--shadows), 6px 6px 6px var(--shadows);
    max-width: 350px;
    width: 100%;
    border-radius: 40px;

    p{
        font-size: 14px;
        color: black;
        font-family: 'Roboto Condensed', sans-serif;
        text-align: center;
    }

    p a {
        margin-left: 8px;
        color: crimson;
        font-family: 'Roboto Condensed', sans-serif;
        
    }

    @media (max-width: 768px){
        padding: 20px;
    }
    @media (max-width: 480px){
        padding: 15px;
    }
`

export const LoginContainInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    align-items: center;

    p{
        color: red;
    }
`

export const LoginLabel = styled.label`
    color: black;
    font-size: 17px;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 600;

    @media (max-width: 768px){
        font-size: 18px;
    }
    @media (max-width: 480px){
        font-size: 16px;
    }
`
export const LoginInput = styled.input`
    text-align: center;
    background-color: transparent;
    padding: 15px;
    font-size: 20px;
    font-family: 'Roboto Condensed', sans-serif;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 2px solid black;
    position: relative;
    transition: all ease .15s;

   

    &::placeholder{
        transform: scale(1);
        transition: all ease .15s;
        position: absolute;
        text-align: center;
    }

    &:focus::placeholder{
        top: -5px;
        left: -30px;
        transform: scale(0.6);
        transition: ease-in .15s;
        color: lightseagreen;
    }

`
export const LoginBtn = styled.input`
    text-align: center;
    margin-top: 40px;
    width: 50%;
    border-radius: 50px;
    padding: 7px 12px;
    font-weight: 600;
    font-size: 14px;
    background-color: #276979;
    color: white;
    cursor: pointer;
    transition: all ease 0.2s;

  &:hover {
    opacity: 0.9;
    color: black;
    background-color: lightgreen;
    transition: all ease 0.2s;
  }

   

    @media (max-width: 768px){
        font-size: 20px;
    }
    @media (max-width: 480px){
        font-size: 18px;
    }

`