import React from 'react';
import '../styles/vision.scss';
import { MdArrowRight } from 'react-icons/md';
import Image from '../Images/group.png';
export default function Vision() {
  return (
    <div className="wrapper">
      <div className="stats">
        <h2>Vision</h2>
        <p className="first">
          <MdArrowRight />
          Positioning Africa as the continental hub for Health innovation and
          trade
        </p>
        <div className="numbers">
          <div>
            <p className="head">square meters</p>
            <p className="number">60000</p>
          </div>
          <div>
            <p className="head">square meters</p>
            <p className="number">60000</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={Image} alt="ahe" />
      </div>
    </div>
  );
}
