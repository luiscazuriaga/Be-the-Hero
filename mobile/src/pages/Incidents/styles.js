import styled from 'styled-components/native'
import Constants from 'expo-constants'

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-top: ${Constants.statusBarHeight + 20}px;
  background: ${(props) => props.theme.colors.background};;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderText = styled.Text`
  font-size: 15px;
  color: ${(props) => props.theme.colors.subtext};
`;
export const HeaderTextBold = styled.Text`
  font-weight: bold;
`;
export const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 16px;
  margin-top: 48px;
  color:${(props) => props.theme.colors.text};
`;
export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color:${(props) => props.theme.colors.subtext};
`;

export const IncidentList = styled.FlatList`
  margin-top: 32px;
`;

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.content};
  margin-bottom: 16px;
`;

export const IncidentProperty = styled.Text`
  font-size: 14px;
  color:${(props) => props.theme.colors.text};
  font-weight: bold;
`;

export const IncidentValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: 24px;
  color: ${(props) => props.theme.colors.subtext};
`;
export const ButtonTouchable = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailsButtonText = styled.Text`
  color:${(props) => props.theme.colors.secundary};
  font-size: 15px;
  font-weight: bold;
  `;