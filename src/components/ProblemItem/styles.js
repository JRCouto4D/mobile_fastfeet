import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 80%;
  margin: 0 auto 20px;
`;

export const Content = styled(RectButton)`
  width: 100%;
  height: 50px;
  padding: 9px 20px;

  background: #fff;
  border: 1px solid #eee;
  border-radius: 4px;

  flex-direction: row;
  justify-content: space-between;
`;

export const Description = styled.Text`
  color: #666;
  font-size: 18px;
`;

export const Date = styled.Text`
  color: #999;
  font-size: 14px;
`;
