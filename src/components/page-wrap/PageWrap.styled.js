import styled from "styled-components";

export const StyledPageWrap = styled.div`
  ${({ theme: { space } }) => `
        padding: ${space.lg};
    `}
`;
