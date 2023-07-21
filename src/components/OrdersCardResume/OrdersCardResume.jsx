import { months } from "../../utils/constants";
import {
  LeftContainer,
  OrdersResumeContainer,
  RightContainer,
} from "./OrdersCardResumeStyles";
import IconOrder from "../../assets/imgs/logo/logo.png";
import { FaCalendarDay} from "react-icons/fa";
import { FaHourglassEnd} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { selectOrder } from "../../redux/ordersSlice/ordersSlice";

const OrdersCardResume = ({
  cartItems,
  shippingCost,
  date,
  orderID,
  setToggleDetail,
  toggleDetail,
}) => {

  const dispatch = useDispatch()
  const subTotalPrice = cartItems.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );

  const totalItems = cartItems.reduce((acc, item) => (acc += item.quantity), 0);

  const fecha = new Date(date);
  const indexOfMonth = fecha.getMonth();
  const month = months[indexOfMonth];
  const minutes =
    fecha.getMinutes() < 10 ? `0${fecha.getMinutes()}` : fecha.getMinutes();
  const dateOrder = `${fecha.getDate()} de ${month} del ${fecha.getFullYear()}`;

  const timeOrder = `${fecha.getHours()}:${minutes} HS`;

  const handleDetail = () => {
    toggleDetail ? toggleDetail : setToggleDetail(!toggleDetail) 
    dispatch(selectOrder(orderID))
  }
  return (
    <OrdersResumeContainer
      title={`Detalles del pedido: ${orderID}`}
      onClick={handleDetail}
    >
      <img src={IconOrder} alt="icon-order" />

      <LeftContainer>
        <h2>Orden: N°{orderID}</h2>
        <p>Total de articulos: {totalItems}</p>
        <span>${subTotalPrice + shippingCost}</span>
      </LeftContainer>

      <RightContainer>
        <FaCalendarDay size="19px" />
        <p>{dateOrder}</p>
        <FaHourglassEnd size="19px" />
        <span>{timeOrder}</span>
      </RightContainer>
    </OrdersResumeContainer>
  );
};
export default OrdersCardResume;
