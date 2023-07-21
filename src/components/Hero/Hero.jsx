
import {HeroContainer,} from "./HeroStyles";
import SliderImgs from "../SliderImgs/SliderImgs";

const Hero = ({ doScroll, scrollCat, scrollGen }) => {
  return (
    <HeroContainer>
      <SliderImgs
        id="#gallery"
        doScroll={doScroll}
        scrollCat={scrollCat}
        scrollGen={scrollGen}
      />

  
    </HeroContainer>
  );
};
export default Hero;
