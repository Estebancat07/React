import {
  CardsProductsContainer,
  PaginateBtn,
  PaginationContainer,
} from "./CardsProductsStyles";
import CardProduct from "./CardProduct/CardProduct";
import {  useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { INITIAL_LIMIT } from "../../utils/constants";

const CardsProducts = ({ doScroll }) => {
  let { products } = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  
  const selectedCategorie = useSelector(
    (state) => state.categories.selectedCategorie
  );

  if (selectedCategorie) {
    products = products.filter(
      (product) =>
        product.category === selectedCategorie 
       
    );
  } else if (selectedCategorie) {
    products = products.filter(
      (product) => product.category === selectedCategorie
    );
  
  } else {
    products;
  }

  const totalProducts = products.length;

  const totalPages = Math.ceil(totalProducts / limit);

  const indexOfLastItem = currentPage * limit;
  const indexOfFirstItem = indexOfLastItem - limit;

  

  const setPage = (num) => {
    setCurrentPage(num);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategorie,]);

  return (
    <>
      <CardsProductsContainer>
        {!products.length ? (
          <h3>No hay productos para la búsqueda especificada</h3>
        ) : totalProducts >= limit ? (
          products
            .map((product) => <CardProduct key={product.id} {...product} />)
            .slice(indexOfFirstItem, indexOfLastItem)
        ) : (
          products.map((product) => (
            <CardProduct key={product.id} {...product} />
          ))
        )}
      </CardsProductsContainer>

      {totalProducts >= limit + 1 && (
        <PaginationContainer>
          <PaginateBtn
            disabled={currentPage === 1}
            onClick={() => setPage(currentPage - 1)}
          >
            Ver menos
          </PaginateBtn>


          <PaginateBtn
            secondary="true"
            disabled={currentPage === totalPages || totalProducts <= limit}
            onClick={() => setPage(currentPage + 1)}
          >
            Ver más
          </PaginateBtn>
        </PaginationContainer>
      )}
    </>
  );
};
export default CardsProducts;
