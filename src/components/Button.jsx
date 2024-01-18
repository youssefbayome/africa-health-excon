import React from 'react';
import '../styles/button.scss';
export default function Button({ title, borderRadius, width, link, ...props }) {
  console.log(props);
  return (
    <button
      className="button"
      style={{
        width: width,
        borderRadius: borderRadius,

        ...props,
      }}>
      {link ? <a href={`/${title}`}>{title}</a> : <p>{title}</p>}
    </button>
  );
}
