import styled from 'styled-components/native';
import  { RFValue  }  from "react-native-responsive-fontsize";

export const HeaderTypes = styled.SafeAreaView`
flex: 1;
`;

export const ReturnButton = styled.TouchableOpacity`
top: 60px;
left: 15px;
position: absolute;
`;

export const LikeButton = styled.TouchableOpacity`
top: 60px;
left: 370px;
position: absolute;
`;

export const Title = styled.Text`
position: absolute;
width: 253px;
height: 38px;
left: 20px;
top: 95px;

font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 38px;
display: flex;
align-items: center;

color: #FFFFFF;
`;

export const FeaturesTitle = styled.Text`
  position: relative;
  display: flex;
  margin-right: 10px;
  `;
 
export const Features = styled.View`
  position: absolute;
  left: 20px;
  top: 145px;
  flex-direction: row;
  justify-content: flex-start;
  background-blend-mode: soft-light;
  opacity: 0.9;
 `;
export const TypeView = styled.View`
  background-color: #FFFF;
  flex: 2;
  width: 100%;
  left: 0px;
  top: 300px;

  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
 `;

export const Avatar = styled.Image`
 position: absolute;
 width: 191.65px;
 height: 189px;
 left: 120px;
 top: -140px;
 `;

 export const DescriptionTitle = styled.Text`
  position: absolute;
  width: 120px;
  height: 28px;
  left: 20px;
  top: 60px;

  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 30px;

  display: flex;
  align-items: center;
  text-align: center;

 
 `;