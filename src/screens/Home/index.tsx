import React from 'react';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { PokeCard } from '../../components/PokeCard';
import { Footer } from '../../components/Footer';
import { HeaderTypes, Title, PokeList, FeaturesTitle, Features } from './styles';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { Loading } from '../../components/Loading';

import theme from '../../global/styles/theme';
import api from '../../services/api';

export interface PokemonProps {
  name: string;
  id: string;
  types: [
    {
      type: {
        name: string;
        color: string;
      };
    }
  ];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  color: string;
  type: [];
}

export interface pokemonTypes {
  typeColor: string;
  name: string;
}

export function Home() {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { colors } = useTheme();

  useEffect(() => {
    async function HandleGetPokemons() {
      let pokeData: PokemonProps[] = [];

      const response = await api.get('/pokemon');
      const { results } = response.data;

      try {
        for (let pokemon of results) {
          const name = pokemon.name;
          await api.get(`/pokemon/${name}/`).then((response) => {
            let backgroundColor = response.data.types[0].type
              .name as keyof typeof colors.type;

            backgroundColor === "normal" && response.data.types.length > 1
              ? (backgroundColor = response.data.types[1].type.name)
              : null;

            const color = colors.type?.[backgroundColor];

            const type = response.data.types.map((pokemonType: any) => {
              const typeName = pokemonType.type.name
              return {
                name: typeName,
              };
            });

            pokeData.push({ ...response.data, color, type });
          });
        }
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
      setPokemons(pokeData);
    }

    HandleGetPokemons();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <HeaderTypes>
          <StatusBar translucent backgroundColor="transparent" />
          <Header />
          <Title>
            Qual pokémon você escolheria?
          </Title>
          <PokeList
            data={pokemons}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) =>
              <PokeCard name={item.name}
                id={item.id}
                types={item.type.map((pokemonTypes: pokemonTypes) => (
                  <Features color={item.color}>
                    <FeaturesTitle color={pokemonTypes.typeColor} key={pokemonTypes.name}>
                      {pokemonTypes.name}</FeaturesTitle>
                  </Features>
                ))}
                avatar={item.sprites.other['official-artwork'].front_default}
                backgrounColor={item.color}
                idColor={theme.colors.type[`${item.types[0].type.name}`]}/>}
            numColumns={2} />
          <Footer />
        </HeaderTypes>)}
    </>
  )
}