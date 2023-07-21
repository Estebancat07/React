import {
  AboutWrapper,
  AllStoreWrapper,
  ContactWrapper,
  HeadProductsContainer,
  MainContainer,
  ProductsTitle,
  ProductsWrapper,
  TitleCategories,
} from "./HomeStyles";

import { useEffect, useRef } from "react";
import Hero from "../../components/Hero/Hero";
import HeadProductsCategorie from "../../components/HeadProductsCategorie/HeadProductsCategorie";
import { useDispatch, useSelector } from "react-redux";
import CardsProducts from "../../components/CardsProducts/CardsProducts";
import Contact from "../../components/Contact/Contact";
import About from "../../components/About/About";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Inicio";
    homeRef.current.scrollIntoView()

    const handleScrollToSection = () => {
      const { hash } = location;
      if (hash) {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({});
        }
      }
    };

    handleScrollToSection();
  }, [location]);

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  const productsRef = useRef(null);
  const categoriesRef = useRef(null);
  const genreRef = useRef(null);
  const homeRef = useRef();

  const doScroll = () => productsRef.current.scrollIntoView();
  const scrollCat = () => categoriesRef.current.scrollIntoView();
  const scrollGen = () => genreRef.current.scrollIntoView();

  return (
    <MainContainer ref={homeRef} id="hero">
      
      <Hero
        doScroll={doScroll}
        scrollCat={scrollCat}
        scrollGen={scrollGen}
        id="#hero"
       
      />
  <AboutWrapper id="about">
        <About />
      </AboutWrapper>
     
      <AllStoreWrapper>
        <HeadProductsContainer>

          <TitleCategories ref={categoriesRef} id= "category">
          CATEGORIAS
          </TitleCategories>

          <HeadProductsCategorie doScroll={doScroll} />

        </HeadProductsContainer>

       
        <ProductsWrapper ref={productsRef} id="products">
          <ProductsTitle>PRODUCTOS</ProductsTitle>
          <CardsProducts doScroll={doScroll}/>
        </ProductsWrapper>
      </AllStoreWrapper>

  
      <ContactWrapper id="contact">
        <Contact />
      </ContactWrapper>
    </MainContainer>
  );
};
export default Home;
