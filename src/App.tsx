import { useState } from "react";
import { NumericFormat } from "react-number-format";
import styled from "styled-components";
import TitlePage from "./components/TitlePage";

export default function App() {
  const [amount, setAmount] = useState<number | string>("");

  const handleChange = (values: any) => {
    const { value } = values;
    setAmount(value);
  };

  return (
    <Container>
      <TitlePage title={"On : develop "} />
      <TitlePage title={"input test : "} />

      <ContainerInput>
        <p>Amount</p>
        <NumericFormat
          thousandSeparator={true}
          suffix=" $"
          allowNegative={false}
          decimalScale={2}
          fixedDecimalScale={false}
          value={amount}
          onValueChange={(values) => handleChange(values)}
        />
      </ContainerInput>
      {amount !== "" && (
        <p>
          <NumericFormat
            thousandSeparator={true}
            suffix=" $"
            allowNegative={false}
            decimalScale={2}
            fixedDecimalScale={false}
            value={amount}
            displayType="text"
          />
        </p>
      )}
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  font-family: "Poppins", Courier, monospace;
`;

const ContainerInput = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  p {
    font-size: 20px;
  }
  input {
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    font-family: "Poppins", Courier, monospace;
  }
`;
