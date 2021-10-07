
// parseFloat(12.000.toFixed(2))


import { css } from '@emotion/css';
import React from 'react';

export default function ourservices() {
  return (
    <div
      className={css`
        background-color: #021e30;
        padding: 1px;
      `}
    >
      <div
        className={css`
          max-width: 1096px;
          margin: 0 auto;
          background-color: #021e30;

          .ourservices {
            margin: 0 auto;
            display: block;
            h1 {
              /* Style for "our servic" */
              text-align: center;

              color: #ffffff;
              font-family: Mermaid;
              font-size: 56px;
              font-weight: 700;
              font-style: normal;
              letter-spacing: normal;
              line-height: 56px;

              text-transform: uppercase;
              /* Text style for "our servic" */
              font-style: normal;
              letter-spacing: 3.36px;
              line-height: normal;
            }
            p {
              /* Style for "Lorem ipsu" */
              max-width: 422px;
              margin: 0 auto;
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
        <div
          className={
            'ourservices ' +
            css`
              padding-top: 100px;
              margin-bottom: 90px !important;
            `
          }
        >
          <h1>our services</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
        </div>

        <div
          className={
            'grid grid-cols-4 mx-auto ' +
            css`
              max-width: 1023px;
              margin-bottom: 140px;

              gap: 0 50px;
              div {
                .div2 {
                  display: inline-block;
                  margin-left: auto;
                  margin-right: auto;
                }
                .div1 {
                  height: 111px;

                  margin-bottom: 50px;
                }
                h1 {
                  margin-bottom: 30px;
                  /* Style for "Fundraiser" */
                  width: 144px;
                  height: 15px;
                  color: #ffffff;
                  font-family: Mermaid;
                  font-size: 20px;
                  font-weight: 700;
                  font-style: normal;
                  letter-spacing: normal;
                  line-height: 56px;
                  text-align: left;
                  text-transform: uppercase;
                  /* Text style for "Fundraiser" */
                  font-style: normal;
                  letter-spacing: 1.2px;
                  line-height: normal;
                }
                p {
                  /* Style for "Lorem ipsu" */
                  width: 157px;
                  height: 73px;
                  color: #ffffff;
                  font-family: Raleway;
                  font-size: 14px;
                  font-weight: 400;
                  font-style: normal;
                  letter-spacing: normal;
                  line-height: 20px;
                  text-align: left;
                  /* Text style for "Lorem ipsu" */
                  font-style: normal;
                  letter-spacing: 0.84px;
                  line-height: normal;
                }
              }
            `
          }
        >
          <div className={'' + css``}>
            <div className='flex justify-center div1'>
              <img className='m-auto	block	' src='img/one.png' alt='' />
            </div>
            <div className='div2'>
              <h1 className='text-center'>Fundraisers{}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor{' '}
              </p>
            </div>
          </div>
          <div className={'' + css``}>
            <div className='flex justify-center'>
              <img className='m-auto	block	' src='img/one.png' alt='' />
            </div>
            <h1 className='text-center'>Fundraisers{}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{' '}
            </p>
          </div>
          <div className={'' + css``}>
            <div className='flex justify-center'>
              <img className='m-auto	block	' src='img/one.png' alt='' />
            </div>
            <h1 className='text-center'>Fundraisers{}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{' '}
            </p>
          </div>
          <div className={'' + css``}>
            <div className='flex justify-center'>
              <img className='m-auto	block	' src='img/one.png' alt='' />
            </div>
            <h1 className='text-center'>Fundraisers{}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
