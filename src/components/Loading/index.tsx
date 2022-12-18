import { ImageTop, ImageBottom, LoadText, LoaderTypes } from './styles';
import pokemonLogo from '../../assets/pokemonlogo.png';
import pokeballLoading from '../../assets/pokeloading.png';

export function Loading() {
  return (
    <>
      <LoaderTypes>
        <ImageTop source={pokemonLogo} />
      </LoaderTypes>
      <LoaderTypes>
        <ImageBottom source={pokeballLoading} />
        <LoadText>CARREGANDO...</LoadText>
      </LoaderTypes>
    </>
  );
}