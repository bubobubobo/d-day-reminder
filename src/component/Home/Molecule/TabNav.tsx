import React from "react";
import { css } from "@emotion/react";
import { TabButton } from "../Atom/TabButton";
import { HOME_CATEGORIES } from "../../../utils/constants";
import { homeCategoryState, THomeCategory } from "../../../recoil/homeCategory";
import { useRecoilState } from "recoil";

type TTabNavProps = {};

export function TabNav({}: TTabNavProps) {
  const [homeCategory, setHomeCategory] = useRecoilState(homeCategoryState);

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement & { innerText: THomeCategory };
    setHomeCategory(target.innerText);
  };

  return (
    <div css={tabNavCss}>
      {HOME_CATEGORIES.map((category) => {
        return (
          <TabButton
            selected={category === homeCategory}
            innerText={category}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
}

const tabNavCss = css`
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;
`;
