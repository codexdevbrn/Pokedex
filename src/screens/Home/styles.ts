import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import  { RFValue  }  from "react-native-responsive-fontsize";
import {theme} from '../../global/styles/theme';

export const HeaderTypes = styled.SafeAreaView`
flex: 1;
`;

export const Title = styled.Text`
position: absolute;
left: 5.6%;
right: -0.27%;
top: 180px;

font-style: normal;
font-weight: 600;
font-size: ${RFValue(31)}px;


color: #303943;
`;

export const PokeList = (styled.FlatList`
margin-top: 130px;
flex: 1;
` as unknown) as typeof FlatList;

export const FooterImage = styled.Image`
  position: absolute;
  width: 142px;
  height: 51px;
  left: 145px;
  top: 808px;
`;

export const FeaturesTitle = styled.Text`
position: relative;
font-style: normal;
font-weight: 500;
font-size: ${RFValue(10)}px;
color: #FFFFFF;

align-items: center;
text-align: center;
 `;
 
 export const Features = styled.View`
 position: relative;
 align-items: center;
 
 height: 18.86px;
 width: 58.94px;
 top: 25px;
 left: 16.72px;
 margin-bottom: 10px;
 
 background: #E8E8E8;
 background-blend-mode: soft-light;
 opacity: 0.5;
 border-radius: 38px;
 
 `;