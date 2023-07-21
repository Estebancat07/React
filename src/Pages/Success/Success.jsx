import {
  SuccesDivider,
  SuccesOrder,
  SuccessContainer,
  SuccessIcon,
  SuccessBtns,
  Successbox,
} from "./SuccessStyles";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Success = () => {
  useEffect(() => {
   
    document.title = "¡Compra Exitosa!";
    successRef.current.scrollIntoView();
  }, []);

  const orderID = useSelector((state) => state.orders.orderID);
  const successRef = useRef();

  const navigate = useNavigate();
  return (
    <SuccessContainer ref={successRef}>
<Successbox>


      <h1>👏 AGRADECEMOS TU COMPRA 👏</h1>

      <SuccesDivider>
        <SuccessIcon />
        <h2>Tu pedido se ha realizado con éxito</h2>
      </SuccesDivider>

      <SuccesOrder>
        <h3>N° de Orden: </h3>
        <span>#{orderID}</span>
      </SuccesOrder>

      <SuccessBtns>
        <button onClick={() => navigate("/#products")}>Seguir comprando</button>

        <button onClick={() => navigate("/orders")}>Mis ordenes</button>
      </SuccessBtns>
</Successbox>

    </SuccessContainer>
  );
};
export default Success;
