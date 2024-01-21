import React from 'react';

export default function Loader({ loading }) {
  return (
    <div>
      {loading ? (
        <div
          style={{
            width: '100%',
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '3rem 0',
          }}>
          loading...
        </div>
      ) : null}
    </div>
  );
}
