import styled from "styled-components";

export const StyledNav = styled.nav`
  ${({ theme: { colors } }) => `
    border-bottom: 1px solid ${colors.black};
  `}
`;

export const StyledLogo = styled.a`
  display: block;
  width: 100%;
  max-width: 230px;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;
