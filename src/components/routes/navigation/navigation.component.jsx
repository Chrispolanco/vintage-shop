import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as HalloweenLogo } from '../../../assets/halloween.svg'


const Navigation = () => {
  return(
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <HalloweenLogo className="logo" width="6%" height="6%" /> 
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            Shop
          </Link>
        </div>
      </div>
      <Outlet/> 
    </Fragment>
  ) 
}; 

export default Navigation; 