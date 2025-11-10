import styled from "styled-components";

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.heading};
  color: ${({ theme }) => theme.colors.primary};
`;

const GreetingCardTheme = () => (
  <Card>
    <Title>Hello World!</Title>
    <p>This card will be using global theme values.</p>
  </Card>
);

export default GreetingCardTheme;
