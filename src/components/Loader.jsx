import React from 'react';

export default function Loader({ loading }) {
  return (
    <div>
      {loading ? (
        <div
          style={{
            width: '100%',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '20px',
          }}>
          loading
        </div>
      ) : null}
    </div>
  );
}
