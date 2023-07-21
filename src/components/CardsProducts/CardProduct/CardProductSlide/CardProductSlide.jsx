
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CardProductSlide = ({imgs, title}) => {
  return (
    <Swiper
        style={{
        marginTop: '20px',
        width: '65%',
        height: '400px',
        borderRadius: '80px',
        backgroundColor: 'white',
      
    }}
     
    >
        {imgs.map(img=>(
            <SwiperSlide key={img.id}>
                <img 
                src={img.img} 
                alt={`${title}`}
                style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'contain',
                   

                }}
                />
            </SwiperSlide>
        ))}

    </Swiper>
  );
};
export default CardProductSlide;
