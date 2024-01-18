import React from 'react';
import '../styles/partners.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
export default function Sponsers({ data }) {
  const { Partners } = data || {};
  const swiperStyles = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      color: 'gold', // Set the color to gold
    },
  };

  return (
    <>
      {Partners?.map((partners, i) => {
        const { Name, SliderItemsList } = partners;
        const [partner, name] = Name.split(' ');

        return (
          <div className="sponsor-container" key={i}>
            <div className="sponsor-content" style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 30, fontWeight: 300 }}>
                <span className="span">{partner}</span> {name}
              </p>

              <Swiper
                spaceBetween={10}
                slidesPerView={4}
                style={{
                  width: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 2rem',
                }}
                modules={[Navigation]}
                navigation={swiperStyles.navigation} // Use custom styles for navigation
                pagination={{ clickable: true }}
                className="swiper-container">
                {SliderItemsList?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={item.Media}
                      alt={`Slide ${index}`}
                      style={{
                        width: '100%',
                        height: '150px',
                        objectFit: 'contain',
                      }}
                    />
                  </SwiperSlide>
                ))}
                <div className="swiper-button-next" />
                <div className="swiper-button-prev" />
              </Swiper>
            </div>
          </div>
        );
      })}
    </>
  );
}
