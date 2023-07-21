import { styled } from "styled-components";


export const RegisterWrapper = styled.div`
  margin-top: 80px;
  width: 100%;
  padding: 40px 60px 80px 60px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px){
    padding: 40px 20px 60px 20px;
  }

  @media (max-width: 480px){
    padding: 40px 10px 60px 10px;
  }
`;

export const RegisterTitle = styled.h1`
  font-size: 24px;
  color: black;
  font-family: 'Roboto Condensed', sans-serif;

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

export const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    align-items: center;
    gap: 20px;
    background-color: var(--white-menus);
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
        font-weight: 500;
    }

    @media (max-width: 768px){
        padding: 20px;
    }
    @media (max-width: 480px){
        padding: 15px;
    }
`

export const RegisterContainInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    align-items: center;

    p{
        color: red;
    }
`

export const RegisterLabel = styled.label`
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
export const RegisterInput = styled.input`
    text-align: center;
    background-color: transparent;
    padding: 10px;
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
        text-align: left;
    }

    &:focus::placeholder{
        top: -5px;
        left: -28px;
        transform: scale(0.6);
        transition: ease-in .15s;
        color:green;
    }
`
export const RegisterBtn = styled.input`
    margin-top: 40px;
    width: 100%;
    border-radius: 50px;
    padding: 7px 15px;
    font-weight: 600;
    font-size: 14px;
    background-color: #276979;
  cursor: pointer;
  transition: all ease 0.2s;
  color: white;

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