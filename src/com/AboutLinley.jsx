import { css } from '@emotion/css';
import React from 'react';

export default function AboutLinley() {
  return (
    <div
      className={css`
        margin-top: 55px;
        margin-bottom: 64px;
        > div {
          background-color: #032c47;
          max-width: 1096px;
          margin: 0 auto;
        }
        p {
          color: #ffffff;
          font-family: Raleway;
          font-size: 16px;
          font-weight: 400;
          font-style: normal;
          letter-spacing: normal;
          line-height: 28px;
          text-align: left;

          font-style: normal;
          letter-spacing: 0.96px;
          line-height: normal;
        }
        h1 {
          margin-top: 56px;
          margin-bottom: 45px;

          color: #ffffff;
          font-family: Mermaid;
          font-size: 56px;
          font-weight: 700;
          font-style: normal;
          letter-spacing: normal;
          line-height: 56px;
          text-align: left;
          text-transform: uppercase;

          font-style: normal;
          letter-spacing: 3.36px;
          line-height: normal;
        }
      `}
    >
      <div className={'grid grid-cols-12 w-11/12 sm:block '}>
        <div className='col-span-5'>
          <img
            className={
              'sm:hidden ' +
              css`
                height: 100%;
              `
            }
            src='img/Layer_4.png'
            alt=''
          />
        </div>
        <div
          className={
            'col-span-7 md:p-10 sm:p-6 ' +
            css`
              padding-left: 78px;
              padding-right: 52px;
            `
          }
        >
          <h1
            className={
              'lg:text-5xl md:text-2xl md:mt-5  ' +
              css`
                max-width: 50%;
              `
            }
          >
            About Linley’s
          </h1>
          <p className='mb-6 md:text-xs		'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. Tempor incididunt ut labore et dolore
            magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
            viverra maecenas accumsan lacus vel facilisis.
          </p>
          <p className='md:text-xs	'>
            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
