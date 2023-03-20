import React from "react";
import { Header } from "../Molecule/Header";
import { css } from "@emotion/react";

export function HomeTemp() {
  return (
    <div css={header}>
      <Header />
    </div>
  );
}

const header = css({
  position: "fixed",
  top: 0,
});
