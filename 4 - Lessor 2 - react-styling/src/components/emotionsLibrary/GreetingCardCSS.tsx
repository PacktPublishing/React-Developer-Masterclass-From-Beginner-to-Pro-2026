/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

type Props = {
  name: string;
  message: string;
  highlighted?: boolean;
};

const cardStyle = (highlighted?: boolean) => css`
  border: 2px solid ${highlighted ? "#e53935" : "#ccc"};
  background-color: ${highlighted ? "#ffebee" : "#ffffff"};
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const titleStyles = css`
  color: #333;
  font-size: 20px;
  margin-bottom: 10px;
`;

const messageStyle = css`
  font-size: 16px;
  color: #555;
`;

const GreetingCardCSS: React.FC<Props> = ({ name, message, highlighted }) => {
  return (
    <div css={cardStyle(highlighted)}>
      <h2 css={titleStyles}>Hello, {name}!</h2>
      <p css={messageStyle}>{message}</p>
    </div>
  );
};

export default GreetingCardCSS;
