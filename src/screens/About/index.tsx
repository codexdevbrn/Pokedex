import React from 'react';
import { useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import theme from '../../global/styles/theme';
import api from '../../services/api';
import {
  HeaderTypes, Title, TypeView, FeaturesTitle,
  Features, ReturnButton, LikeButton, Avatar, DescriptionTitle
} from './styles';
import { Entypo } from '@expo/vector-icons';

import { PokeCardProps } from '../../components/PokeCard';

interface DescriptionProps {
  flavor_text_entries: [
    {
      flavor_text: string;
}];

}

export function About() {

  const [description, setDescription] = useState<DescriptionProps[]>([]);

  const route = useRoute();
  const pokemon = route.params as PokeCardProps
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    api.get(`/pokemon-species/${pokemon.id}`).then((response)=> {
        
    })
  }, []);





  return (
    <>
      <HeaderTypes style={{ backgroundColor: pokemon.backgrounColor }}>

        <ReturnButton onPress={handleGoBack}>
          <Entypo
            name="chevron-thin-left"
            style={{ color: '#ffff' }}
            size={24}
          />
        </ReturnButton>
        <LikeButton>
          <Entypo name="heart-outlined"
            style={{ color: '#ffff' }}
            size={24} />
        </LikeButton>
        <Title>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</Title>
        <Features>
          {pokemon.types?.map((type) => {
            return (
              <FeaturesTitle>
                {type}
              </FeaturesTitle>
            )
          })}
        </Features>
        <TypeView>
          <Avatar
            source={{ uri: pokemon.avatar }} />
          <DescriptionTitle style={{ color: pokemon.backgrounColor }}>
            Descrição
          </DescriptionTitle>

        </TypeView>
      </HeaderTypes>
    </>
  )
}