import React from 'react';

import { css } from '@emotion/css';

export default function Lorem() {
  return (
    <div
      className={css`
        div {
          max-width: 1096px;
          margin: 0 auto;
          gap: 75px 0;
        }
      `}
    >
      <div className='grid grid-cols-12'>
        <div
          className={`col-span-6 ${css`
            /* Style for "Rectangle" */
            min-width: 533px;

            background-color: #b7b7b7;
          `}
            `}
        ></div>
        <div className='col-span-6'>
          <p>
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

        <div className='col-span-6'>
          <p>
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
              min-width: 533px;

              background-color: #b7b7b7;
            `
          }
        ></div>
      </div>
    </div>
  );
}
