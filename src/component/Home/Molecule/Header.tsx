import React from "react";
import { css } from "@emotion/react";
import { Logo } from "../Atom/Logo";
import { Setting } from "../Atom/Setting";
import { HOME_HEADER_HEIGHT } from "../../../utils/constants";
import { TabNav } from "./TabNav";

export function Header() {
  return (
    <Header.Group>
      <Header.Main />
      <Header.Nav />
    </Header.Group>
  );
}

Header.Group = HeaderGroup;
Header.Main = HeaderMain;
Header.Nav = TabNav;

function HeaderGroup({ children }: { children: React.ReactNode }) {
  return <header css={headerContainerCss}>{children}</header>;
}

function HeaderMain() {
  return (
    <div css={headerMainCss}>
      <Logo />
      <Setting />
    </div>
  );
}

const headerContainerCss = css`
  position: fixed;
  width: 100%;
  top: 0;
  padding-left: 24px;
  padding-right: 24px;
`;

const headerMainCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${HOME_HEADER_HEIGHT}px;
`;
