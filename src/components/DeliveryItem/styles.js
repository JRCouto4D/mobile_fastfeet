import styled from 'styled-components/native';

export const Container = styled.View`
  border: 1px solid rgba(220, 220, 220, 0.8);
  border-radius: 4px;
  margin-bottom: 30px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  padding: 10px 10px 0;
`;

export const TextId = styled.Text`
  font-size: 16px;
  color: #7d40e7;
  font-weight: bold;
  margin-left: 15px;
`;
export const PanelStatus = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 30px 0;
`;
export const Frame = styled.View`
  width: 50px;
  align-items: center;
`;
export const Status = styled.View`
  width: 9px;
  height: 9px;
  border: 1px solid #7d40e7;
  background: ${(props) => (props.complete ? '#7d40e7' : '#fff')};
  border-radius: 4.5px;
`;
export const Label = styled.Text`
  margin-top: 10px;
  width: 80px;
  color: #999;
  text-align: center;
`;
export const Line = styled.View`
  position: absolute;
  height: 1px;
  background: #7d40e7;
  top: 4.5px;
  left: 25px;
  right: 25px;
`;
export const Footer = styled.View`
  background: rgba(220, 220, 220, 0.2);
  border-radius: 4px;
  padding: 20px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const BoxFooter = styled.View``;
export const BoxLabel = styled.Text`
  font-size: 14px;
  color: #999;
`;
export const BoxValue = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  margin-top: 2px;
`;
export const DetailsButton = styled.TouchableOpacity``;
export const ButtonText = styled.Text`
  color: #7d40e7;
  font-size: 16px;
  font-weight: bold;
`;
