import { css } from '@emotion/css';
import React from 'react';

export default function footer() {
  return (
    <div
      className={css`
        padding: 1px;
        background-color: #01111b;
      `}
    >
      <div
        className={
          'container w-11/12 mx-auto ' +
          css`
            max-width: 1096px;
          `
        }
      >
        <div
          className={
            'logodiv flex flex-wrap  items-center sm:mb-10 ' +
            css`
              margin-top: 127px;
              margin-bottom: 20px;
              gap: 50px 0;
              a {
                @media (max-width: 769px) {
                  margin-left: 25px;
                }

                margin-left: 50px;
                color: #ffffff;
                font-family: Raleway;
                font-size: 14px;
                font-weight: 500;
                font-style: normal;
                letter-spacing: normal;
                line-height: 96.01px;
                text-align: left;
                text-transform: uppercase;

                font-style: normal;
                letter-spacing: 2.52px;
                line-height: normal;
              }
            `
          }
        >
          <img className='mr-auto img1' src='img/logo.png' alt='' />
          <a href=''>Home </a>
          <a href=''>About Us </a>
          <a href=''>Our services</a>
          <a href=''>Contact Us</a>
        </div>

        <div
          className={css`
            margin-bottom: 90px;
          `}
        >
          <img className='ml-auto' src='img/5-layers.png' alt='' />
        </div>
        <div
          className={
            'line mx-auto ' +
            css`
              max-width: 774px;
              height: 1px;
              background-color: #e0c39a;
              margin-bottom: 43px;
            `
          }
        ></div>
        <p
          className={css`
            color: #ffffff;
            font-family: Raleway;
            font-size: 14px;
            font-weight: 500;
            font-style: normal;
            letter-spacing: normal;
            line-height: 96.01px;
            text-align: center;

            font-style: normal;
            letter-spacing: normal;
            line-height: normal;
            margin-bottom: 50px;
          `}
        >
          Linley’s Outside Catering Copyright 2021. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
