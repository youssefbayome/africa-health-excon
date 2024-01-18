import React from 'react';
import HeadingWithBackground from './SecionHeading';
import NewsSlider from './NewsSlider';

export default function ExconNews({ data, loading, error }) {
  const list = data?.List;
  const news = data && list[0];
  // console.log(news);
  return (
    <div>
      <HeadingWithBackground text="ExCon News" showHorizontalLines={false} />
      <NewsSlider newsList={news} />
      <div>
        {/* {news && news.NewsList.map((item) => <div>{item.HeadLine}</div>)} */}
      </div>
    </div>
  );
}
