import React from "react";
import { css } from "@emotion/react";
import { theme } from "../../../styles";

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
  background-color: ${theme.color.white};
  border-radius: initial;
  border-bottom: 2px solid ${selected ? theme.color.black : theme.color.white};
  line-height: 2.5em;
  text-align: center;
  cursor: pointer;
`;
