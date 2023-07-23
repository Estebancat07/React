import { styled } from "styled-components"

export const HeadFilterCard =  styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 250px;
  height: 260px;
  border-radius: 40px;
  cursor: pointer;
  background-color: #276979;
  box-shadow: -3px 6px 6px black;
  backdrop-filter: blur(5px);
  transform: scale(1);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.03);
    filter: drop-shadow(4px 4px 10px black);
  }


  @media (max-width: 1024px){
    width: 200px;
    
  }

  @media (max-width: 500px){
    width: 150px;
  }
`

export const HeadCardText = styled.h2`
  position: absolute;
  right: auto;
  left: auto;
  color:white;
  font-weight: 500;
  text-shadow: 2px 3px 4px black;
  
  transition: all ease-in .2s;
  pointer-events: none;
  padding-bottom: 220px;
  

`
export const HeadCardImg = styled.img`
  width: 60%;
  height: 50%;
  border-radius:440px;
`
