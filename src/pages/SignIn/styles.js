import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;

  background: #7d40e7;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 80%;
`;

export const Form = styled.View`
  margin-top: 50px;
  align-self: stretch;
`;

export const Input = styled.TextInput`
  background: #fff;
  border-radius: 4px;
  padding-left: 20px;
  color: #333;
  font-size: 16px;
  height: 50px;
`;

export const SubmitButton = styled.TouchableOpacity`
  background: #82bf18;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-top: 20px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
