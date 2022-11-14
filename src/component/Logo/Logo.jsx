import React from 'react';
// import logoImg from '../../asset/img/gwin_original.png';
import logoImg from '@asset/img/gwin_original.png';

const Logo = ({ children }) => 
  <h1>
    <img src={logoImg} alt={children} width={300} height={300} />
    <span className="sr-only">{children}</span>
  </h1>;

export default Logo;
