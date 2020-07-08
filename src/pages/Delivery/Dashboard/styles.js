import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  padding: 30px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Message = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const Name = styled.Text`
  margin-top: 2px;
  font-size: 26px;
  color: #333;
  font-weight: bold;
`;

export const ButtonLogout = styled.TouchableNativeFeedback``;

export const BoxHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;
export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #333;
`;
export const BoxButton = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const PendingButton = styled.TouchableOpacity``;
export const PendingText = styled.Text`
  margin-right: 20px;
  font-size: 16px;
  color: ${(props) => (props.active ? '#7d40e7' : '#333')};
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
`;
export const HandedOutButton = styled.TouchableOpacity``;
export const HandedOutText = styled.Text`
  margin-right: 20px;
  font-size: 16px;
  color: ${(props) => (props.active ? '#7d40e7' : '#333')};
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
`;

export const DeliveryList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
