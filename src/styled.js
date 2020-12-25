import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const HeaderText = styled.Text`
  font-size: 25px;
  color: #000;
  margin-top: 30px;
`;

export const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 20px;
  background-color: #eee;
  margin-top: 20px;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;
`;

export const CalcButton = styled.TouchableHighlight`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  background-color: #1e88e5;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;

export const ResultArea = styled.View`
  width: 90%;
  margin-top: 20px;
  background-color: #eee;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const ResultItemTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin-bottom: 5px;
`;

export const ResultItem = styled.Text`
  font-size: 18px;
  color: #000;
  margin-bottom: 20px;
`;

export const DiscountArea = styled.View`
  flex-direction: row;
  margin: 20px;
`;

export const DiscountItem = styled.TouchableHighlight`
  width: 55px;
  height: 45px;
  margin: 0 10px;
  border-radius: 5px;
  background-color: #1e88e5;
  justify-content: center;
  align-items: center;
`;
