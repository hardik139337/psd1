import React from 'react';
import { css } from '@emotion/css';

export default function Header() {
  return (
    <div
      className={css`
        header {
          background-color: #021e30;

          color: white;
        }
        div {
          max-width: 1162px;
          /* display: flex; */
          align-items: center;
          margin: 0 auto;
          min-height: 140px;
        }
        button {
          /* Style for "Rectangle" */
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
      `}
    >
      <header className=''>
        <div className='flex'>
          <img src='img/logo.png' alt='' />

          <a href=''>Home</a>

          <a href=''>About Us </a>
          <a href=''>Our services</a>
          <button>contact us</button>
        </div>
      </header>
    </div>
  );
}
