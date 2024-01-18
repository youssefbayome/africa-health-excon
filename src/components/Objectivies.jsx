import React from 'react';
import '../styles/objectivies.scss';
import CardList from './CardList';
import HeadingWithBackground from './SecionHeading';
import Loader from './Loader';

export default function Objectivies({ data, loading, error }) {
  const list = data?.List;

  if (loading) {
    return <Loader loading={loading} />;
  }
  if (error) {
    return (
      <div style={{ textAlign: 'center' }}>
        Something went wrong fetching data
      </div>
    );
  }

  if (!list) {
    return <span>List is undefined or null</span>;
  }

  return (
    <>
      <HeadingWithBackground text={'EXCON Objectives'} />
      <>
        {list.map((item, index) => (
          <CardList key={index} items={item?.Objectives?.SliderItemsList} />
        ))}
      </>
    </>
  );
}
