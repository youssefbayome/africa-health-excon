import React from 'react';
import HeadingWithBackground from './SecionHeading';
import '../styles/categories.scss';
export default function ExconCategories({ data }) {
  const { SliderItemsList } = (data && data?.Categories) || {};
  const firstRow = SliderItemsList?.slice(0, 5);
  const secondRow = SliderItemsList?.slice(5, 11);
  // console.log(firstRow)
  return (
    <div>
      <HeadingWithBackground
        text={data?.Categories?.Name}
        showHorizontalLines={true}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          // flexDirection: 'column',
          gap: 10,
          alignItems: 'center',
        }}>
        <>
          {firstRow?.map((row, i) => (
            <div className="category-item" key={i}>
              <img
                src={row.Media}
                alt="category"
                style={{ width: 40, height: 40, objectFit: 'cover' }}
              />
              <p>{row.Title}</p>
            </div>
          ))}
        </>
        <>
          {secondRow?.map((row, i) => (
            <div className="category-item" key={i}>
              <img
                src={row.Media}
                alt="category"
                style={{ width: 40, height: 40, objectFit: 'cover' }}
              />
              <p>{row.Title}</p>
            </div>
          ))}
        </>
      </div>
    </div>
  );
}
