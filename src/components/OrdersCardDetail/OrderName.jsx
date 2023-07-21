import { FaMapPin, FaHome, FaPhone } from "react-icons/fa";
import {
  OrderNameBot,
  OrderNameContainer,
  OrderNameMid,
  OrderNameText,
} from "./OrdersCardDetailStyles";

const OrderName = ({ users, orderID }) => {
  return (
    <OrderNameContainer>
      <h2>Pedido #{orderID} realizado por:</h2>
      <OrderNameText>{users.name}</OrderNameText>

      <OrderNameMid>
        <FaPhone color="green" />
        <p>
          <b>Teléfono:</b> {users.phone}
        </p>
        <FaHome color="blue" />
        <span>
          <b>Localidad:</b> {users.location}
        </span>
      </OrderNameMid>

      <OrderNameBot>
        <FaMapPin color="red"/>
        <p>Dirección: {users.adress}</p>
      </OrderNameBot>
    </OrderNameContainer>
  );
};
export default OrderName;
