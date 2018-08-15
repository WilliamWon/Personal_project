import React, { Component } from "react";
import "./SideNav.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SideNavigation = styled.div`
  width: 206px;
  height: 100%;
  background-color: #a7dbef;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LogoCarrier = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 70px;
`;
const Spacer = styled.div`
  height: 2px;
`;
const Spacer2 = styled.div`
  width: 60px;
  height: 2px;
  background: rgb(34, 34, 34);
`;
const Logo = styled.div`
  &.side {
    color: rgb(34, 34, 34);
  }
`;
const LinkCarrier = styled.div`
  width: 90px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
const SideNavLinks = styled.button`
  font-size: 0.9em;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  letter-spacing: 2px;
  color: rgb(34, 34, 34);
  text-decoration: none;
  background-color: inherit;
  border: none;
  outline: none;
  transition: 0.1s;
  &.linksHover:hover {
    color: rgba(255, 255, 255, 0.672);
  }
`;
class SideNav extends Component {
  render() {
    return (
      <SideNavigation className="sideNav">
        <LogoCarrier id="logo__carrier">
          <Spacer className="spacer" />
          <Logo className="side">VENT</Logo>
          <Spacer2 className="spacer2" />
        </LogoCarrier>
        <LinkCarrier className="linkCarrier">
          <Link to="/">
            <SideNavLinks className="linksHover">HOME</SideNavLinks>
          </Link>
          <Link to="/search">
            <SideNavLinks className="linksHover">SEARCH</SideNavLinks>
          </Link>
          <Link to="/favorites">
            <SideNavLinks className="linksHover">FAVORITES</SideNavLinks>
          </Link>
          <a href={process.env.REACT_APP_LOGOUT}>
            <SideNavLinks className="linksHover">LOGOUT</SideNavLinks>
          </a>
        </LinkCarrier>
      </SideNavigation>
    );
  }
}

export default SideNav;
