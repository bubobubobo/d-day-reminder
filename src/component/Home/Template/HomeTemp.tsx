import React from "react";
import { css } from "@emotion/react";
import { Header } from "../Molecule/Header";
import { TabNav } from "../Molecule/TabNav";

type THomeTempProps = {};

export function HomeTemp({}: THomeTempProps) {
  return (
    <div css={header}>
      <Header />
      <TabNav />
    </div>
  );
}

const header = css({
  position: "fixed",
  top: 0,
});
