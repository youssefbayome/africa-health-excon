import React from 'react';
import Button from './Button';
import { RegistrationLinks } from '../lib/data';
import HeadingWithBackground from './SecionHeading';
export default function Registeration() {
  return (
    <div
      style={{
        borderTop: '1px solid #C99A28',
        borderBottom: '1px solid #C99A28',
        paddingBottom: '20px',
      }}>
      <HeadingWithBackground text={'REGISTER WITH US'} />
      <div
        style={{
          display: 'flex',
          gap: 20,
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        {RegistrationLinks.map((link) => (
          <Button title={link.title} borderRadius={2} link />
        ))}
      </div>
    </div>
  );
}
