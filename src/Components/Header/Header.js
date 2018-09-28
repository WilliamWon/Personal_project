import React, { Component } from "react";
import "./Header.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderMain = styled.div`
  height: 10vh;
  width: 100vw;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background: #1ed4f4;
  background: rgb(34, 34, 34);
  z-index: 4;
`;
const HeaderContainer = styled.div`
  height: 37px;
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border-bottom: 1px solid black; */
`;
const HeaderFiller = styled.div`
  display: block;
  width: 70px;
  height: 40px;
`;
const Logo = styled.div`
  font-family: "Bevan", cursive;
  font-size: 1.4em;
  letter-spacing: 1px;
  /* color: #111c2e; */
  color: white;
`;
const HeaderLog = styled.button`
  width: 70px;
  height: 40px;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 0.8em;
  background: transparent;
  color: white;
  border: none;
  outline: none;
  letter-spacing: 1.5px;
  transition: 0.1s;

  &.logHover:hover {
    color: rgba(255, 255, 255, 0.378);
  }
`;
class Header extends Component {
  render() {
    return (
      <HeaderMain id="header">
        {this.props.user.first_name ? (
          <HeaderContainer>
            <HeaderFiller />
            <Link to="/">
              <Logo>VENT</Logo>
            </Link>
            <a href={process.env.REACT_APP_LOGOUT}>
              <HeaderLog className="logHover">LOGOUT</HeaderLog>
            </a>
          </HeaderContainer>
        ) : (
          <HeaderContainer>
            <HeaderFiller />
            <Link to="/">
              <Logo>VENT</Logo>
            </Link>
            <a href={process.env.REACT_APP_LOGIN}>
              <HeaderLog className="logHover">LOGIN</HeaderLog>
            </a>
          </HeaderContainer>
        )}
      </HeaderMain>
    );
  }
}

const mapStateToProps = state => {
  return { ...state.userReducer };
};

export default connect(mapStateToProps)(Header);
