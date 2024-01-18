import React from 'react';
import Logo from '../Images/favicon1.png';
import Logo2 from '../Images/UPALogo14.png';
import { navigaitionLinks } from '../lib/data';
import Button from './Button';
import '../styles/footer.scss';
export default function Footer() {
  return (
    <>
      <div className="container">
        <Button title={'go to top'} width={'100%'} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '60px',
          }}>
          <div>
            <img
              src={Logo}
              alt="health exhipiton"
              style={{ height: '250px' }}
            />
          </div>
          <div className="links" style={{ display: 'flex', gap: '10rem' }}>
            <div>
              <p className="header-tag">Quick links</p>
              <ul style={{ display: 'flex', flexDirection: 'column' }}>
                {navigaitionLinks.map((link, i) => (
                  <li key={i} style={{ color: 'white' }}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="header-tag">Quick links</p>

              <ul>
                <li>
                  {' '}
                  <p>
                    <a href="mailto:info@africahealthexcon.com">
                      info@africahealthexcon.com
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="mailto:africahealthexcon.com">
                      africahealthexcon.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="logo-2">
            <img
              src={Logo2}
              alt="health exhipiton"
              style={{ height: '100px', width: '100px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
