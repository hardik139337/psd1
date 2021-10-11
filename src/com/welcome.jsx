import React from 'react';
import { css } from '@emotion/css';

export default function Welcome() {
  return (
    <div
      className={css`
        padding-top: 86px;

        background-color: #082132;

        background-image: url('img/Layer_2.png');
        min-height: 679px;
        display: grid;
        place-items: center;
        .welcome {
          margin: auto;
          background-color: #032c47;

          h2 {
            margin-bottom: 35px;
            color: #e0c39a;
            font-family: Raleway;
            font-size: 16px;
            font-weight: 500;
            font-style: normal;
            letter-spacing: normal;
            line-height: 46.09px;
            text-align: left;
            text-transform: uppercase;

            font-style: normal;
            letter-spacing: 2.88px;
            line-height: normal;
          }

          h1 {
            margin-bottom: 30px;
            color: #ffffff;
            font-family: Mermaid;
            font-size: 64px;
            font-weight: 700;
            font-style: normal;
            letter-spacing: normal;
            line-height: 68px;
            text-align: left;
            text-transform: uppercase;

            font-style: normal;
            letter-spacing: 3.84px;
            line-height: normal;
          }
          p {
            max-width: 444px;
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
        }

        .catering {
          padding-top: 68px;
          padding-left: 74px;
        }
      `}
    >
      <div className='welcome container w-11/12 grid mx-auto grid-cols-12 mb-5'>
        <div className='catering col-span-8 pr-3 pb-3  md:p-5 sm:col-span-12 sm:p-5 '>
          <h2>
            {' '}
            <span
              className={css`
                width: 63px;
                height: 2px;
                background-color: #e0c39a;
                display: inline-block;
                margin-right: 20px;
                vertical-align: middle;
              `}
            ></span>{' '}
            welcome to
          </h2>
          <h1 className='md:text-2xl lg:text-4xl '>
            linley’s outside catering
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
        </div>
        <div className='col-span-4 sm:hidden'>
          <img
            className={css`
              width: 100%;
              height: 100%;
              object-fit: cover;
            `}
            src='img/Layer_3.svg'
            alt=''
          />
        </div>
      </div>
      <p
        className={
          'mb-5 ' +
          css`
            text-align: center;

            width: 67px;
            height: 10px;
            color: #e0c39a;
            font-family: Raleway;
            font-size: 14px;
            font-weight: 500;
            font-style: normal;
            letter-spacing: normal;
            line-height: 46.24px;
            text-align: left;
            text-transform: uppercase;

            font-style: normal;
            letter-spacing: 2.51px;
            line-height: normal;
            margin: 0 auto;
          `
        }
      >
        {' '}
        scroll
      </p>
      <div
        className={
          'mb-5 ' +
          css`
            margin: 0 auto;
            width: 2px;
            height: 45px;
            background-color: #e0c39a;
          `
        }
      ></div>
    </div>
  );
}
