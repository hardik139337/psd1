import { css } from '@emotion/css';
import React from 'react';

export default function ourservices() {
  return (
    <div
      className={css`
        background-color: #021e30;

        .ourservices {
          margin: 100px auto;
          display: inline-block;
          h1 {
            /* Style for "our servic" */

            color: #ffffff;
            font-family: Mermaid;
            font-size: 56px;
            font-weight: 700;
            font-style: normal;
            letter-spacing: normal;
            line-height: 56px;
            text-align: left;
            text-transform: uppercase;
            /* Text style for "our servic" */
            font-style: normal;
            letter-spacing: 3.36px;
            line-height: normal;
          }
          p {
            /* Style for "Lorem ipsu" */
            width: 422px;

            color: #ffffff;
            font-family: Raleway;
            font-size: 16px;
            font-weight: 400;
            font-style: normal;
            letter-spacing: normal;
            line-height: 28px;
            text-align: center;
            /* Text style for "Lorem ipsu" */
            font-style: normal;
            letter-spacing: 0.96px;
            line-height: normal;
          }
        }
      `}
    >
      <div className='ourservices'>
        <h1>our services</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut.
        </p>
      </div>

      <div
        className={`grid grid-cols-4 ${css`
          max-width: 1023px;
          margin: 0 auto;
          div {
          }
        `}`}
      >
        <div>
          <img src='img/one.png' alt='' />
          <h1>Fundraisers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor{' '}
          </p>
        </div>
        <div>
          <img src='img/one.png' alt='' />
          <h1>Fundraisers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor{' '}
          </p>
        </div>
        <div>
          <img src='img/one.png' alt='' />
          <h1>Fundraisers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor{' '}
          </p>
        </div>
        <div>
          <img src='img/one.png' alt='' />
          <h1>Fundraisers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
