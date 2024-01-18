// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '../styles/siwper.module.scss'; // Import the module styles
export const NewsSlider = ({ newsList }) => {
  const slidesPerView = window.innerWidth < 768 ? 1 : 3; 

  return (
    <Swiper
      style={{
        width: '70%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 2rem',
      }}
      spaceBetween={40}
      slidesPerView={slidesPerView}
      navigation
      pagination={{ clickable: true }}>
      {newsList &&
        newsList?.NewsList.map((news) => (
          <SwiperSlide key={news.Id} className={styles['swiper-card']}>
            <div className={styles.card}>
              <img
                className={styles['card-image']}
                src={news.ImageURL}
                alt={news.HeadLine}
              />
              <div className={styles['card-content']}>
                <p className={styles['card-title']}>{news.HeadLine}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      <div className={styles['swiper-button-next']} />
      <div className={styles['swiper-button-prev']} />
    </Swiper>
  );
};
export default NewsSlider;
