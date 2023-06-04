import React from 'react';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import logo from '../../../assets/logo.svg'

import './MainNavigation.css';

const MainNavigation = props => {
  return <MainHeader>

    <h1 className="main-navigation__title">
      <img src={logo} alt="logo" />
    </h1>
    <div className="main-navigation__header-nav">
      <NavLinks />
    </div>
    
  </MainHeader>
};

export default MainNavigation;
