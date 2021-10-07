import { css } from '@emotion/css';
import React from 'react';

export default function footer() {
  return (
    <div
      className={css`
        min-height: 500px;
        /* Style for "Rectangle" */

        background-color: #01111b;
      `}
    >
      footer
      <div
        className={
          'container mx-auto ' +
          css`
            max-width: 1096px;
          `
        }
      >
        <div
          className={
            'logodiv flex  items-center ' +
            css`
              margin-top: 127px;
              margin-bottom: 20px;
              a {
                /* Style for "Home" */
                /* width: 551px;
height: 10px; */
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
                /* Text style for "Home" */
                font-style: normal;
                letter-spacing: 2.52px;
                line-height: normal;
              }
            `
          }
        >
          <img className='mr-auto' src='img/logo.png' alt='' />
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
              /* Style for "Rectangle" */
              max-width: 774px;
              height: 1px;
              background-color: #e0c39a;
              margin-bottom: 43px;
            `
          }
        ></div>
        <p
          className={css`
            /* Style for "Linley’s O" */
            /* width: 399px;
height: 14px; */
            color: #ffffff;
            font-family: Raleway;
            font-size: 14px;
            font-weight: 500;
            font-style: normal;
            letter-spacing: normal;
            line-height: 96.01px;
            text-align: center;
            /* Text style for "Linley’s O" */
            font-style: normal;
            letter-spacing: normal;
            line-height: normal;
            margin-bottom: 50px ;
          `}
        >
          Linley’s Outside Catering Copyright 2021. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
