import React from 'react';
import '../styles/hero.scss';
import Africa from '../Images/Rectangle.png';
export default function HeroSection() {
  const remainingTime = [{ days: 1, hours: 5, minutes: 55, seconds: 55 }];
  return (
    <div style={{ padding: '2rem 3rem' }}>
      <div className="video-section">
        <video
          width="100%"
          height="100%"
          controls
          autoPlay
          src="https://www.youtube.com/embed/trn6CkJWB-w?si=WotIxNhwEB2pfEEy"></video>
        <div className="image-section">
          <img src={Africa} alt="africa" />
          <h3>africa</h3>
          <h3>Health ExCon</h3>
          <div className="details">
            <p>
              June <span>5</span>
            </p>{' '}
            -{' '}
            <p>
              <span>7</span>2022
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="circle-container">
          <div
            style={{ width: '70%', height: 2, backgroundColor: '#BDBDBD' }}
          />
          {Object.entries(remainingTime[0]).map(([key, value]) => (
            <div className="circle">
              <p>{key}</p>
              <p>{value}</p>
            </div>
          ))}
          <p className='to-go'>
            ...to go
          </p>
        </div>
      </div>
    </div>
  );
}
