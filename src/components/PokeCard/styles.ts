import styled from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";

export const Card = styled.View`
  padding: 10px;
  `;

export const Container = styled.TouchableOpacity`
  flex: 1;
  width: 192px;
  height: 120.01px;
  border-radius: 15px;
  margin: 15px;
  justify-content: space-around;
  padding: 10px 0px 10px 0px;
`;

export const Name = styled.Text`
  position: absolute;
  left: 20.72px;
  top: 10.78px;

  font-style: normal;
  font-weight: 700;
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(14)}px;

  display: flex;
  align-items: center;

  color: #FFFFFF;
 `;

export const IdTitle = styled.Text`
  position: relative;
  left: 118.25px;
  bottom: 70px;

  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(14)}px;

  mix-blend-mode: normal;
  opacity: 0.5;`;

export const Avatar = styled.Image`
  position: absolute;
  width: 90.71px;
  height: 89px;
  left: 80.41px;
  top: -40px;
`;