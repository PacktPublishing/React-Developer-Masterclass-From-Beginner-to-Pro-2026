import React from "react";
import styled from "styled-components";

type GreetingCardProps = {
  name: string;
  message: string;
  highlighted?: boolean;
};

const Card = styled.div<{ $highlighted?: boolean }>`
  border: 2px solid ${({ $highlighted }) => ($highlighted ? "#e53935" : "#ccc")};
  background-color: ${({ $highlighted }) =>
    $highlighted ? "#ffebee" : "#ffffff"};
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Name = styled.h2`
  color: #2e7d32;
  margin-bottom: 10px;
`;

const Message = styled.p`
  font-size: 16px;
  color: #555;
`;

const GreetingCard: React.FC<GreetingCardProps> = ({
  name,
  message,
  highlighted = false,
}) => {
  return (
    <Card $highlighted={highlighted}>
      <Name>Hello, {name}!</Name>
      <Message>{message}</Message>
    </Card>
  );
};

export default GreetingCard;
