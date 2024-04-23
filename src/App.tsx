import styled from "styled-components";
import TitlePage from "./conponents/TitlePage";

export default function App() {
  return (
    <Container>
      <TitlePage title={"On : preprod"} />
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", Courier, monospace;
`;
