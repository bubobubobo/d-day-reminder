import { Theme } from "@emotion/react";

export const theme: Theme = {
  color: {
    white: "#ffffff",
    black: "#000000",
    tan: "#B68D40",
    cream: "#F4EBD0",
    charcoal: "#122620",
    gold: "#D6AD60",
  },
  font: { main: "Pretendard" },
};

export const useTheme = () => {
  return theme;
};
