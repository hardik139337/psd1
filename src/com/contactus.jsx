import { css } from '@emotion/css';
import React from 'react';

export default function contactus() {
  return (
    <div
      className={css`
        background-color: #032c47;
        padding: 1px;
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
          className={css`
            margin: 100px auto;
            max-width: 426px;
          `}
        >
          <h1
            className={css`
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
              margin-bottom: 41px;
            `}
          >
            contact us
          </h1>
          <p
            className={css`
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
            `}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
        </div>
        <div className='form'>
          <div
            className={
              'grid grid-cols-3 sm:grid-cols-1 ' +
              css`
                gap: 30px 74px;
                input {
                  /* max-width: 311px; */
                  width: 100%;
                  height: 43px;
                  border: 1px solid #e0c39a;
                  background-color: #032c47;
                }
                p {
                  margin-bottom: 23px;
                  color: #ffffff;
                  font-family: 'Raleway - Semi Bold';
                  font-size: 16px;
                  font-weight: 400;
                  font-style: normal;
                  letter-spacing: normal;
                  line-height: 28px;
                  text-align: left;
                  text-transform: uppercase;

                  font-style: normal;
                  letter-spacing: 0.96px;
                  line-height: normal;
                }
              `
            }
          >
            <div>
              <p htmlFor=''>YOUR NAME</p>
              <input type='text' />
            </div>
            <div>
              <p htmlFor=''>YOUR Email</p>
              <input type='text' />
            </div>
            <div>
              <p htmlFor=''>YOUR No.</p>
              <input type='text' />
            </div>
          </div>

          <div
            className={
              'yourmessage ' +
              css`
                margin-top: 75px;
                margin-bottom: 54px;
              `
            }
          >
            <p
              className={
                ' ' +
                css`
                  color: #ffffff;
                  font-family: 'Raleway - Semi Bold';
                  font-size: 16px;
                  font-weight: 400;
                  font-style: normal;
                  letter-spacing: normal;
                  line-height: 28px;
                  text-align: left;
                  text-transform: uppercase;

                  font-style: normal;
                  letter-spacing: 0.96px;
                  line-height: normal;
                  margin-bottom: 26px;
                `
              }
            >
              your message
            </p>
            <input
              type='text'
              className={
                ' ' +
                css`
                  width: 100%;
                  height: 170px;
                  border: 1px solid #e0c39a;
                  background-color: #032c47;
                  display: block;
                  margin-bottom: 54px;
                `
              }
            />
            <button
              className={css`
                width: 165px;
                height: 47px;
                background-color: #e0c39a;
                margin: 0 auto;
                display: block;
                margin-bottom: 100px;
              `}
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
