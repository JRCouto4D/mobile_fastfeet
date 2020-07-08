import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 50px;
`;

export const Avatar = styled.Image`
  width: 250px;
  height: 250px;
  border-radius: 125px;
`;

export const BoxInfo = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const BoxLabel = styled.View`
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #999;
`;

export const Value = styled.Text`
  font-size: 26px;
  color: #333;
  font-weight: bold;
  margin-top: 2px;
`;

export const LogoutButton = styled.TouchableOpacity`
  background: #e74040;
  width: 100%;
  height: 50px;

  margin-top: 20px;

  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
