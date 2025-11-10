import React from "react";
import styled from "@emotion/styled";

type Props = {
  name: string;
  message: string;
  highlighted?: boolean;
};

const Card = styled.div<{ highlighted?: boolean }>`
  border: 2px solid ${({ highlighted }) => (highlighted ? "#e53935" : "#ccc")};
  background-color: ${({ highlighted }) =>
    highlighted ? "#ffebee" : "#ffffff"};
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #000000;
  margin-bottom: 10px;
`;

const Message = styled.p`
  font-size: 16px;
  color: #000000;
`;

const GreetingCardStyled: React.FC<Props> = ({
  name,
  message,
  highlighted,
}) => {
  return (
    <Card highlighted={highlighted}>
      <Title>Hello, {name}!</Title>
      <Message>{message}</Message>
    </Card>
  );
};

export default GreetingCardStyled;
