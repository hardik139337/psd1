import React from 'react';

import { css } from '@emotion/css';

export default function Lorem() {
  return (
    <div
      className={css`
        padding-bottom: 112px;
        div {
          max-width: 1096px;
          margin: 0 auto;
          gap: 75px 0;
        }
      `}
    >
      <div className='grid grid-cols-12 w-11/12 sm:grid-cols-1'>
        <div
          className={
            'col-span-6 ' +
            css`
              width: 100%;
              min-height: 300px;
              background-color: #b7b7b7;
            `
          }
        ></div>
        <div
          className={
            'col-span-6 sm:p-5 ' +
            css`
              padding-left: 31px;
              padding-top: 7px;
            `
          }
        >
          <p
            className={css`
              margin-bottom: 10px;
            `}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. Tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <p>
            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.{' '}
          </p>
        </div>

        <div
          className={
            'col-span-6 sm:p-5 ' +
            css`
              padding-right: 31px;
              padding-top: 10px;
            `
          }
        >
          <p
            className={css`
              margin-bottom: 10px;
            `}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. Tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <p>
            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.{' '}
          </p>
        </div>

        <div
          className={
            'col-span-6 ' +
            css`
              /* Style for "Rectangle" */
              /* max-width: 533px; */
              width: 100%;
              min-height: 300px;
              background-color: #b7b7b7;
            `
          }
        ></div>
      </div>
    </div>
  );
}
