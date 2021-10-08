import React, { useState } from 'react';
import { css } from '@emotion/css';

export default function Header() {
  const [state, setState] = useState(false);
  return (
    <div
      className={css`
        header {
          background-color: #021e30;

          color: white;
        }
        div {
          max-width: 1162px;

          align-items: center;
          margin: 0 auto;
          min-height: 140px;
        }
        button {
          width: 165px;
          height: 47px;
          background-color: #e0c39a;
          margin-left: 62px;
        }

        img {
          margin-right: auto;
        }
        a {
          color: white;
          margin: 0 25px;
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .menu {
            display: inline-block;
          }
          .h {
            display: none;
          }
        }
      `}
    >
      <header>
        <div className='flex flex-wrap w-11/12 '>
          <img src='img/logo.png' alt='' />

          {!state && (
            <>
              <a className='h' href=''>
                Home
              </a>
              <a className='h' href=''>
                About Us{' '}
              </a>
              <a className='h' href=''>
                Our services
              </a>
              <button className='h md:m-1'>contact us</button>
            </>
          )}
          {
            <img
              onClick={() => {
                setState(!state);
                console.log('click');
              }}
              className={
                'menu ' +
                css`
                  width: 25px;
                  height: 25px;
                  color: white;
                  background-color: white;
                  display: none;
                  margin-right: 20px !important;
                `
              }
              src="data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E"
              alt=''
            />
          }
        </div>
      </header>
    </div>
  );
}
