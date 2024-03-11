import {NavLink} from "react-router-dom";
import React from "react";
import { useAuth0 } from '@auth0/auth0-react';

const MainNav = () => {
  const {loginWithRedirect, logout, user, isLoading } = useAuth0();
  return (
    <div className="navbar-nav mr-auto">
      <NavLink
        to="/"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Home
      </NavLink>
      <NavLink
        to="/profile"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Profile
      </NavLink>
      <NavLink
        to="/external-api"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        External API
      </NavLink>
      {!isLoading && !user && (
        <button onClick={loginWithRedirect} className="btn btn-primary btn-block">
          Log in
        </button>
      )}
      {!isLoading && user && (
        <button onClick={() => logout({ returnTo: window.location.origin })} className="btn btn-primary btn-block">
          Log out
        </button>
      )}
    </div>
  )
};

export default MainNav;
