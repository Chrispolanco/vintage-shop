import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import pic from '../../../assets/ajeet-mestry-UBhpOIHnazM-unsplash.jpg'

const Navigation = () => {
  return(
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <img src={pic} alt="here" width="60" height="80"/>
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