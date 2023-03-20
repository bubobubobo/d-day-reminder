import React from "react";
import { Logo } from "../Atom/Logo";
import { css } from "@emotion/react";
import { Setting } from "../Atom/Setting";

export function Header() {
  return (
    <div css={Container}>
      <Logo />
      <Setting />
    </div>
  );
}

const Container = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100vw",
  height: 80,
  padding: 24,
});
