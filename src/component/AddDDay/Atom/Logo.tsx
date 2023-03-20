import React from "react";
import { Check, LogoImg } from "../../../assets/svg";
import { css } from "@emotion/react";

export function Logo() {
  return (
    <div css={container}>
      <Check width={"20"} height={"20"} fill={"#E97070"} />
      <LogoImg width={"200"} height={"19"} />
    </div>
  );
}

const container = css({
  backgroundColor: "while",
});
