import { useNavigate } from "react-router-dom"
import { NotFoundContainer } from "./NotFoundStyles"

const NotFound = () => {
const navigate = useNavigate()
  return (
    <NotFoundContainer>
        <button onClick={()=> navigate('/')}>Ir a Inicio</button>
    </NotFoundContainer>
  )
}
export default NotFound