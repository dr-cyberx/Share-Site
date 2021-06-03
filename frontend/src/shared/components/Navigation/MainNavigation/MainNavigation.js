import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainNavigation.css';
import MainHeader from '../MainHeader/MainHeader';
import SideDrawer from '../SideDrawer/SideDrawer';
import NavLinks from '../NavLinks/NavLinks';

const MainNavigation = () => {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setisDrawerOpen(previousdawer => !previousdawer)
  }

  return (<>
    {
      isDrawerOpen &&
      <SideDrawer>
        <nav className="main-navigation__drawer-nav ">
          <NavLinks />
        </nav>
      </SideDrawer>
    }

    <MainHeader>
      <button className="main-navigation__menu-btn" onClick={handleDrawer}>
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link>Your Places </Link>
      </h1>
      <nav className="main-navigation__header-nav">
        <NavLinks />
      </nav>
    </MainHeader>
  </>
  )
}

export default MainNavigation;
