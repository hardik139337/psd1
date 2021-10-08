import React, { useState, useRef } from 'react';
import { css } from '@emotion/css';

export default function Header() {
  const [state, setState] = useState(true);
  const ref = useRef();
  return (
    <div
      className={css`
        header {
          background-color: #021e30;

          color: white;
        }
        header > div {
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

        @media (max-width: 800px) {
          .menu {
            display: inline-block;
          }
          .divdiv {
            display: ${state ? 'none' : 'grid '};
            position: absolute;

            bottom: 0;
            left: 50%;
            transform: translate(-50%, 100%);
            background-color: #021e30;

            width: 100%;

            > * {
              margin: 10px 0;
            }
          }
        }
        @media (min-width: 800px) {
          .divdiv {
            display: block;
          }
        }
      `}
    >
      <header>
        <div className='flex flex-wrap w-11/12 relative '>
          <img src='img/logo.png' alt='' />

          <div className='divdiv'>
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
          </div>

          <img
            ref={ref}
            onClick={() => {
              setState(!state);
              console.log(ref.current.style);
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
        </div>
      </header>
    </div>
  );
}
