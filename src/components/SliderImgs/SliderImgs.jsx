import { heroImgs } from "./heroSliderImgs";
import {
  SliderHeroContainer,
  SliderImg,
  SwiperContainer,
  SwiperSlideContainer,
} from "./SliderImgsStyles";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SliderImgs = ({ doScroll, scrollCat }) => {
  const slideToStore = (data) => {
    if (!data) return;
    else if (data === "store") {
      doScroll();
      return;
    } else {
      scrollCat();
      return;
    }
  };

  return (
    <SliderHeroContainer>
      <SwiperContainer>
        {heroImgs.map((slide) => (
          <SwiperSlideContainer
            key={slide.id}
            style={{
              cursor: `${slide.cursor ? "pointer" : "default"}`,
            }}
            onClick={() => slideToStore(slide.category)}
          >
            <SliderImg src={slide.img} alt={slide.name} title={slide.title} />
          </SwiperSlideContainer>
        ))}
      </SwiperContainer>
    </SliderHeroContainer>
  );
};
export default SliderImgs;
