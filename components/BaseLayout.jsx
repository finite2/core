import styled from "styled-components";

export const Page = styled.div`
  position: fixed;
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  padding: 20px;
  overflow: auto;
  width: 100%;
`;

export const SideSubMenu = styled.div.attrs({ id: "sub-side-menu" })`
  top: 0;
  bottom: 0;
`;

export const Article = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
  max-width: 900px;
`;
