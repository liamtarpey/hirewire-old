import React from "react";

// Components
import PageWrap from "../page-wrap/PageWrap";

// Styled
import { StyledNav, StyledLogo } from "./Nav.styled";

// Statics
import logo from "../../statics/img/hirewire-logo.jpg";

export default function Nav() {
  return (
    <StyledNav>
      <PageWrap>
        <StyledLogo>
          <img src={logo} alt="Hirewire logo" />
        </StyledLogo>
      </PageWrap>
    </StyledNav>
  );
}
