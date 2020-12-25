import React, { useState, useEffect } from "react";

import {
  Container,
  Text,
  HeaderText,
  Input,
  CalcButton,
  ResultArea,
  ResultItemTitle,
  ResultItem,
  DiscountArea,
  DiscountItem,
} from "./styled";

export default function Home() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [percentage, setPercentage] = useState(10);

  function calc() {
    const nBill = parseFloat(bill);

    if (nBill) {
      setTip((percentage / 100) * nBill);
    }
    // else {
    //   alert("Digite o valor da conta");
    // }
  }
  useEffect(() => {
    calc();
  }, [percentage]);

  return (
    <Container>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input
        value={bill}
        placeholder="Quanto deu a Conta ?"
        placeholderTextColor="#000"
        keyboardType="number-pad"
        onChangeText={(n) => setBill(n)}
        returnKeyType="done"
      />

      <DiscountArea>
        <DiscountItem onPress={() => setPercentage(5)}>
          <Text>5%</Text>
        </DiscountItem>

        <DiscountItem onPress={() => setPercentage(10)}>
          <Text>10%</Text>
        </DiscountItem>

        <DiscountItem onPress={() => setPercentage(15)}>
          <Text>15%</Text>
        </DiscountItem>

        <DiscountItem onPress={() => setPercentage(20)}>
          <Text>20%</Text>
        </DiscountItem>
      </DiscountArea>

      <CalcButton onPress={calc}>
        <Text>{`Calcular ${percentage}%`}</Text>
      </CalcButton>
      {tip > 0 && (
        <ResultArea>
          <ResultItemTitle>Valor da Conta</ResultItemTitle>
          <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>

          <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
          <ResultItem>
            R$ {tip.toFixed(2)} ({percentage}%)
          </ResultItem>

          <ResultItemTitle>Valor Total</ResultItemTitle>
          <ResultItem>R$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
        </ResultArea>
      )}
    </Container>
  );
}
