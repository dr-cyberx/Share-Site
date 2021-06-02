import React from 'react';
import './MainNavigation.css';
import MainHeader from '../MainHeader/MainHeader';

const MainNavigation = () => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">Your Places</h1>
      <nav>
        ...
      </nav>
    </MainHeader>
  )
}

export default MainNavigation;
