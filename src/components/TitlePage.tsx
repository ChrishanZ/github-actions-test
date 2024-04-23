import styled from "styled-components";

interface ITitlePage {
  title: string;
}

export default function TitlePage({ title }: ITitlePage) {
  return <Title>{title}</Title>;
}

const Title = styled.h1`
  font-size: 54px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
