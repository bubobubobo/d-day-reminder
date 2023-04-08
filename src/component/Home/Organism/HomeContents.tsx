import React from "react";
import { css } from "@emotion/react";
import { HOME_HEADER_HEIGHT } from "../../../utils/constants";

export function HomeContents() {
  return <div css={contentContainerCss}></div>;
}

const contentContainerCss = css`
  position: fixed;
  top: ${HOME_HEADER_HEIGHT}px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  flex-flow: column;
  justify-content: start;
  align-items: center;
`;
