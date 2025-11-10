export const theme = {
  colors: {
    primary: "#6200ea",
    secondary: "#03dac6",
    text: "#333",
    background: "#f9f9f9",
  },
  fontSizes: {
    heading: "24px",
    body: "16px",
  },
};

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      text: string;
      background: string;
    };
    fontSizes: {
      heading: string;
      body: string;
    };
  }
}
