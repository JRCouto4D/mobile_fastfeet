import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Box = styled.View`
  background: #7d40e7;
  width: 100%;
  height: 220px;
`;

export const Content = styled.View`
  position: absolute;
  width: 100%;

  top: 110px;
`;

export const Header = styled.View`
  width: 80%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const ProblemsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 50px;
`;

export const NoProblemsText = styled.Text`
  align-self: stretch;
  font-size: 26px;
  text-align: center;
  font-weight: bold;
`;

export const BoxNoProblems = styled.View`
  margin: 120px auto 0;
`;
