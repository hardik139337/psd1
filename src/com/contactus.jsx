import { css } from '@emotion/css';
import React from 'react';

export default function contactus() {
  return (
    <div
      className={css`
        background-color: #032c47;
        padding: 1px;
        /* padding-top: 100px; */
      `}
    >
      <div
        className={
          'container mx-auto ' +
          css`
            max-width: 1096px;
          `
        }
      >
        <div
          className={css`
            margin: 100px auto;
          `}
        >
          <h1
            className={css`
              /* Style for "contact us" */
              /* width: 359px;
            height: 40px; */
              text-align: center;
              color: #ffffff;
              font-family: Mermaid;
              font-size: 56px;
              font-weight: 700;
              font-style: normal;
              letter-spacing: normal;
              line-height: 56px;

              text-transform: uppercase;
              /* Text style for "contact us" */
              font-style: normal;
              letter-spacing: 3.36px;
              line-height: normal;
            `}
          >
            contact us
          </h1>
          <p
            className={css`
              /* Style for "Lorem ipsu" */
              /* width: 422px;
            height: 44px; */
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
            `}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
        </div>
        <div className='form'>
          <div
            className={
              'grid grid-cols-3 ' +
              css`
                gap: 0 74px;
                input {
                  /* Style for "Rectangle" */
                  max-width: 311px;
                  width: 100%;
                  height: 43px;
                  border: 1px solid #e0c39a;
                  background-color: #032c47;
                }
                p {
                  /* Style for "YOUR NAME" */
                  /* width: 102px;
                  height: 11px; */
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
                  /* Text style for "YOUR NAME" */
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
                  /* Style for "your messa" */
                  /* width: 133px;
height: 11px; */
                  color: #ffffff;
                  font-family: 'Raleway - Semi Bold';
                  font-size: 16px;
                  font-weight: 400;
                  font-style: normal;
                  letter-spacing: normal;
                  line-height: 28px;
                  text-align: left;
                  text-transform: uppercase;
                  /* Text style for "your messa" */
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
                  /* Style for "Rectangle" */
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
                /* Style for "Rectangle" */
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
