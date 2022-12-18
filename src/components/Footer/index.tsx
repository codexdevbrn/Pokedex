import { FooterImage, FooterView } from './styles';
import pokemonLogo from '../../assets/pokemonlogo.png';

export function Footer() {
  return (
    <FooterView>
      <FooterImage source={pokemonLogo} />
    </FooterView>
  );
}
