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
export const BoxInfo = styled.View`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 4px;
  width: 80%;
  padding: 15px;
  margin: 0 auto 10px;
`;
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  margin-left: 10px;
  color: #7d40e7;
  font-size: 16px;
  font-weight: bold;
`;

export const BoxLabel = styled.View`
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #999;
`;

export const Value = styled.Text`
  font-size: 16px;
  color: #333;
  margin-top: 5px;
`;

export const BoxDate = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 15px;
`;

export const BoxButton = styled.View`
  width: 80%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
`;

export const Button = styled.TouchableOpacity`
  background: ${(props) => (props.disabled ? '#eee' : '#f8f9fd')};
  flex: 1;
  padding: 15px 30px;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  border: 1px solid #ddd;
  margin-left: 2px;
`;

export const TextButton = styled.Text`
  text-align: center;
  margin-top: 10px;

  color: #999;
  font-size: 16px;
`;
