import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';

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
  height: 80%;
  top: 110px;
  align-items: center;
`;

export const Preview = styled.Image`
  flex: 1;
`;

export const Camera = styled(RNCamera)`
  border-radius: 10px;
  flex: 1;
  width: 80%;
  justify-content: flex-end;
  align-items: center;
`;

export const DescartButton = styled.TouchableOpacity`
  position: absolute;
  padding: 10px;
  background: #7d40e7;
  border-radius: 4px;
  top: 15px;
  right: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DescartText = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-left: 10px;
`;
export const TakePictureButton = styled.TouchableOpacity`
  flex: 0;
  justify-content: center;
  align-items: center;

  align-self: center;

  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  height: 70px;
  width: 70px;
  border-radius: 50px;

  bottom: 25px;
`;
export const IconCapture = styled.View`
  flex: 0;
  flex-direction: row;
  justify-content: center;
`;

export const SubmitButton = styled.TouchableOpacity`
  background: #7d40e7;
  width: 80%;
  height: 50px;
  margin-top: 20px;
  border-radius: 4px;

  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
