import React from 'react';
import Header from './com/Header';
import './App.css';

import Welcome from './com/welcome';
import { css } from '@emotion/css';

import AboutLinley from './com/AboutLinley';
import Lorem from './com/lorem';
import Ourservices from './com/ourservices';
import Contactus from './com/contactus';
import Footer from './com/footer';
export default function App() {
  return (
    <div>
      <Header></Header>
      <Welcome></Welcome>
      <div
        className={css`
          height: 19px;
          background-color: #e0c39a;
        `}
      ></div>

      <AboutLinley></AboutLinley>
      <Lorem></Lorem>
      <Ourservices></Ourservices>
      <Contactus></Contactus>
      <Footer></Footer>
    </div>
  );
}
