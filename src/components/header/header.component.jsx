import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  Navbar,
  NavLinksContainer,
  HeaderLinkContainer,
  TitleAndLogoContainer,
  Title,
} from "./header.styles";

const Header = ({ history }) => (
  <HeaderContainer>
    <TitleAndLogoContainer>
      <Link to="/">
        <img
          src={require(`../../assets/logo.svg`)}
          alt="Logo"
          width="50"
          height="50"
        />
      </Link>
      <Title> CRUD App</Title>
    </TitleAndLogoContainer>
    <Navbar>
      <NavLinksContainer>
        <HeaderLinkContainer>
          <Link className="header-link" to="/">
            {" "}
            HOME
          </Link>
        </HeaderLinkContainer>
        <HeaderLinkContainer>
          <Link className="header-link" to="/add-new">
            {" "}
            ADD NEW USER
          </Link>
        </HeaderLinkContainer>
        <HeaderLinkContainer>
          <Link className="header-link" to="/">
            {" "}
            ABOUT
          </Link>
        </HeaderLinkContainer>
      </NavLinksContainer>
    </Navbar>
  </HeaderContainer>
);

export default Header;
