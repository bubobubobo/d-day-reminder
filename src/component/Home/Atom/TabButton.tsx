import React from "react";
import { css } from "@emotion/react";

type TTabButtonProps = {
  selected: boolean;
  innerText: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export function TabButton({ selected, innerText, onClick }: TTabButtonProps) {
  return (
    <span aria-label={"button"} css={buttonCss(selected)} onClick={onClick}>
      {innerText}
    </span>
  );
}

const buttonCss = (selected: boolean) => css`
  display: inline-block;
  width: 100px;
  font-size: 12px;
  background-color: #ffffff;
  border-radius: initial;
  border-bottom: 2px solid ${selected ? "#000000" : "#ffffff"};
  line-height: 2.5em;
  text-align: center;
  cursor: pointer;
`;
