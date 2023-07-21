import { styled } from "styled-components";

export const CartCardItem = styled.div`
justify-self: flex-start;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 10px;
  border-radius: 5px;
  background-color: var(--white-menus);
  box-shadow: -4px 4px 6px var(--shadows), 4px 4px 6px var(--shadows);

  @media (max-width: 530px){
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const LeftCartInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: flex-start;
  padding: 10px;

  @media (max-width: 530px){
    align-items: center;
  }
`;

export const ImgItemCart = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  border: 1px solid var(--grey-dark);
  box-shadow: -2px 2px 5px var(--shadows);
  padding: 2px;
`;
export const TitleItemCart = styled.h2`
  text-align: left;
  font-size: 18px;
  font-weight: 600;
  color: black;
  font-family: 'Roboto Condensed', sans-serif;

  @media (max-width: 530px){
    text-align: center;
  }
`;

export const RightCartInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
`;
export const MidTopText = styled.span`
  align-self: center;
  color: black;
  padding: 4px;
  font-size: 16px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 600;
`;

export const RightMid = styled.div`
  justify-self: center;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;

export const BtnsQuant = styled.button`
  border-radius: 5px;
  width: 25px;
  height: 25px;
  border: 1.5px solid black;
  outline: none;
  font-weight: 800;
  background-color: ${({ adder }) => (adder ? "green" : "var(--white-menus)")};
  cursor: pointer;
  color: ${({ adder }) => (adder ? "black" : "var(--black)")};
  transition: all ease 0.3s;

  &:hover {
    background-color: ${({ adder }) =>
      adder ? "var(--soft-black)" : "var(--grey-light)"};
  }
`;
export const Quantity = styled.p`
  text-align: center;
  padding: 10px;
  font-size: 12px;
  font-family: 'Roboto Condensed', sans-serif;
`;

export const RightSizeText = styled.h3`
  color: black;
  text-align: center;
  border-bottom: 1px solid black;
  padding-bottom: 5px;
`;

export const PriceDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 10px 10px;
  font-family: 'Roboto Condensed', sans-serif;
`;

export const PriceContains = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PriceText = styled.h3`
  font-size: 18px;
  padding-bottom: 4px;
  border-bottom: 1px solid var(--grey-dark);
`;
export const PriceTextOff = styled.h3`
  font-weight: 500;
  font-size: 10px;
  align-self: flex-end;
`;

export const DiscountOff = styled.span`
    color: var(--red);
    text-align: center;
    font-size: 14px;
    padding: 5px 5px 5px 20px;
    background-color: var(--white-transparent);
    position: relative;
    border-radius: 3px;
    border: 1px solid var(--black);

    &::before {
    content: "";
    position: absolute;
    right: auto;
    border: 1px solid var(--black);
    top: 8px;
    left: 4px;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: var(--white);
  }
`;