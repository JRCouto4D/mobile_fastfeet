import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
`;

export const Box = styled.View`
  background: #7d40e7;
  width: 100%;
  height: 220px;
`;

export const Form = styled.View`
  position: absolute;
  width: 100%;

  top: 110px;
`;

export const AreaText = styled.TextInput.attrs({
  placeholderTextColor: '#999',
  multiline: true,
  textAlignVertical: 'top',
})`
  width: 80%;
  height: 480px;
  margin: 0 auto;

  background: #fff;
  border: 1px solid #eee;

  padding: 30px;
  color: ${(props) => (props.editable ? '#333' : '#999')};
  font-size: 18px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  margin: 15px auto 0;

  background: #7d40e7;
  border-radius: 4px;

  justify-content: center;
  align-items: center;

  display: ${(props) => (props.disabled ? 'none' : 'flex')};
`;

export const TextButton = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;
