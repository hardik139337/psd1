import { css } from '@emotion/css';
import React from 'react';

export default function AboutLinley() {
  return (
    <div
      className={css`
        margin-top: 55px;
        margin-bottom: 64px;
        div {
          background-color: #032c47;
          max-width: 1096px;
          margin: 0 auto;
        }
        p {
          /* Style for "Lorem ipsu" */
          width: 545px;
          /* height: 293px; */
          color: #ffffff;
          font-family: Raleway;
          font-size: 16px;
          font-weight: 400;
          font-style: normal;
          letter-spacing: normal;
          line-height: 28px;
          text-align: left;
          /* Text style for "Lorem ipsu" */
          font-style: normal;
          letter-spacing: 0.96px;
          line-height: normal;
        }
        h1 {
          /* Style for "About Linl" */
          margin-top: 56px;
          margin-bottom: 45px;
          width: 256px;
          /* height: 96px; */
          color: #ffffff;
          font-family: Mermaid;
          font-size: 56px;
          font-weight: 700;
          font-style: normal;
          letter-spacing: normal;
          line-height: 56px;
          text-align: left;
          text-transform: uppercase;
          /* Text style for "About , Li" */
          font-style: normal;
          letter-spacing: 3.36px;
          line-height: normal;
        }
      `}
    >
      <div className={'grid grid-cols-12 '}>
        <div className='col-span-4'>
          <img src='img/Layer_4.png' alt='' />
        </div>
        <div className='col-span-8'>
          <h1>About Linley’s</h1>
          <p className='mb-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. Tempor incididunt ut labore et dolore
            magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
            viverra maecenas accumsan lacus vel facilisis.
          </p>
          <p>
            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
