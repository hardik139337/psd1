import { css } from '@emotion/css';
import React from 'react';

export default function ourservices() {
  return (
    <div
      className={
        'overflow-x-hidden ' +
        css`
          background-color: #021e30;
          padding: 1px;
          position: relative;
        `
      }
    >
      <img
        className={
          'md:hidden ' +
          css`
            position: absolute;
            top: 0;
            left: -60px;
          `
        }
        src='img/Layer_14.png'
        alt=''
      />
      <img
        className={
          'md:hidden ' +
          css`
            position: absolute;
            top: 0;
            right: -60px;
          `
        }
        src='img/Layer_15.png'
        alt=''
      />

      <div
        className={
          'w-11/12 ' +
          css`
            max-width: 1096px;
            margin: 0 auto;
            background-color: #021e30;

            .ourservices {
              margin: 0 auto;
              display: block;
              h1 {
                text-align: center;

                color: #ffffff;
                font-family: Mermaid;
                font-size: 56px;
                font-weight: 700;
                font-style: normal;
                letter-spacing: normal;
                line-height: 56px;

                text-transform: uppercase;

                font-style: normal;
                letter-spacing: 3.36px;
                line-height: normal;
              }
              p {
                max-width: 430px;
                margin: 0 auto;
                color: #ffffff;
                font-family: Raleway;
                font-size: 16px;
                font-weight: 400;
                font-style: normal;
                letter-spacing: normal;
                line-height: 28px;
                text-align: center;

                font-style: normal;
                letter-spacing: 0.96px;
                line-height: normal;
              }
            }
          `
        }
      >
        <div
          className={
            'ourservices relative lg:mt-20  ' +
            css`
              padding-top: 100px;
              margin-bottom: 90px !important;
            `
          }
        >
          <h1 className='sm:mb-6 mb-8'>our services</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
        </div>

        <div
          className={
            'grid grid-cols-4 mx-auto lg:grid-cols-2 sm:grid-cols-1 ' +
            css`
              max-width: 1023px;
              margin-bottom: 140px;

              gap: 0 50px;
              div {
                @media (max-width: 1000px) {
                  .div1 {
                    margin-bottom: 15px !important;
                  }
                  margin-bottom: 25px !important;
                }

                .div2 {
                  margin-left: auto;
                  margin-right: auto;
                  display: grid;
                  justify-content: center;
                }
                .div1 {
                  height: 111px;

                  margin-bottom: 50px;
                }
                h1 {
                  margin-bottom: 30px;

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

                  font-style: normal;
                  letter-spacing: 1.2px;
                  line-height: normal;
                }
                p {
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
            <div className='flex justify-center div1'>
              <img className='m-auto	block	' src='img/s2.png' alt='' />
            </div>
            <div className='div2'>
              <h1 className='text-center'>special occasions{}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor{' '}
              </p>
            </div>
          </div>{' '}
          <div className={'' + css``}>
            <div className='flex justify-center div1'>
              <img className='m-auto	block	' src='img/s3.png' alt='' />
            </div>
            <div className='div2'>
              <h1 className='text-center'>corporate events{}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor{' '}
              </p>
            </div>
          </div>{' '}
          <div className={'' + css``}>
            <div className='flex justify-center div1'>
              <img className='m-auto	block	' src='img/s4.png' alt='' />
            </div>
            <div className='div2'>
              <h1 className='text-center'>dinner parties{}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor{' '}
              </p>
            </div>
          </div>{' '}
        </div>
      </div>
    </div>
  );
}
