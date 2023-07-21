import { styled } from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1300px;
  width: 100%;
  height: auto;
  margin-top: 40px;
  padding-bottom: 40px;

  @media (max-width: 1024px) {
    gap: 20px;
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 40px;
  }

  @media (max-width: 480px) {
    gap: 60px;
  }
`;
export const ContactLeftDiv = styled.div`
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding: 20px 20px;



  iframe {
    width: 400px;
    height: 400px;
    border: none;
    border-radius: 5px;
    box-shadow: -4px 4px 6px var(--shadows);

    @media (max-width: 1024px) {
      width: 280px;
      height: 280px;
      align-self: center;
    }

    @media (max-width: 768px) {
      width: 260px;
      height: 260px;
    }

    @media (max-width: 480px) {
      width: 240px;
      height: 240px;
    }
  }

  p {
    color: var(--black);
    font-size: 20px;

    @media (max-width: 1024px) {
      align-self: center;
    }
  }

  span {
    font-weight: 600;
    color: var(--blue-light);

    @media (max-width: 1024px) {
      align-self: center;
      text-align: center;
    }
  }

  @media (max-width: 1024px) {
    gap: 20px;
    padding: 20px;
  }
`;

export const ContactTitle = styled.h3`
  font-size: 40px;
  color: black;
  text-align: center;

  


  

  @media (max-width: 1024px) {
    font-size: 38px;
    align-self: center;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
  @media (max-width: 480px) {
    font-size: 34px;
  }
`;

export const ContactRightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  align-self: center;
  height: 620px;
  

  h2 {
    color:black;
    font-size: 30px;
    text-align: center;

    @media (max-width: 1024px) {
      align-self: center;
      text-align: center;
      font-size: 28px;
    }

    @media (max-width: 768px) {
      font-size: 26px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;

  @media (max-width: 1024px) {
    width: 95%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 98%;
  }
`;

export const ContainInput = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  gap: 10px;
  background-color:gainsboro;
 border-radius: 20px;
  width: 100%;
  transition: all ease 0.15s;

  &:hover {
    box-shadow: 0 0 10px black;
    transform: scale(1.01);
    transition: all ease-in 0.15s;
  }

  @media (max-width: 1024px) {
    padding: 15px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const ContactLabel = styled.label`
  font-size: 22px;
  color: var(--black);
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 20px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ContactInput = styled.input`
  border: none;
  font-size: 22px;
  padding: 10px;
  border-bottom: 1px solid var(--black);
  outline: none;
  background-color: transparent;
  transform: scale(1);
  transition: all ease 0.2s;
  position: relative;

  &::placeholder {
    transform: scale(1);
    text-align: center;
    transition: all ease 0.2s;
  }

  &:focus::placeholder {
    position: absolute;
    transform: scale(0.6);
    top: -5px;
    left: -30px;
    color: var(--blue-light);
    transition: all ease 0.2s;
  }

  &:hover {
    border-color: var(--grey-dark);
    transition: all ease 0.2s;
  }

  @media (max-width: 1024px) {
    font-size: 20px;
    width: 95%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 98%;
    font-size: 18px;
  }
`;

export const SubmitBtn = styled.input`
  border-radius: 30px;
  color: var(--white);
  margin-top: 40px;
  width: 100%;
  padding: 10px 20px;
  font-size: 22px;
  font-weight: 600;
  outline: none;
  background-color: #276979;
  cursor: pointer;
  transition: all ease 0.2s;

  &:hover {
    opacity: 0.9;
    color: black;
    background-color: lightgreen;
    transition: all ease 0.2s;
  }
`;

export const SubmitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  align-self: center;

  button {
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;

    svg {
      color: black;
      pointer-events: none;

      @media (max-width: 1024px) {
        font-size: 40px;
      }
      @media (max-width: 768px) {
        font-size: 36px;
      }
      @media (max-width: 480px) {
        font-size: 30px;
      }
    }
  }

  h3 {
    color: black;
    font-size: 40px;
    text-align: center;

    @media (max-width: 1024px) {
      font-size: 36px;
    }
    @media (max-width: 768px) {
      font-size: 30px;
    }
    @media (max-width: 480px) {
      font-size: 26px;
    }
  }
`;
