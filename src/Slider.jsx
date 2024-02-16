import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow'; 

const containerStyle = {
    padding:'30px',
  width: '80%', 
  margin: 'auto', 
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const Slider = () => {
  return (
    <div style={containerStyle}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
            <img src="/Images/img01.jpg" alt="" style={imageStyle} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
            <img src="/Images/img02.jpg" alt="" style={imageStyle} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
            <img src="/Images/img03.jpg" alt="" style={imageStyle} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
            <img src="/Images/img04.jpg" alt="" style={imageStyle} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
