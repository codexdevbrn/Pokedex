import { Heading, Title, SubTitle, BackgroundImage, ImageProfile, ImageRender } from './styles';
import pokeball from '../../assets/pokeball.png';
import imageProfile from '../../assets/profile.png';

export function Header() {
  return (
    <>
      <Heading>
        <BackgroundImage source={pokeball} />
        <Title>
          Olá, Ash Ketchum
        </Title>
        <SubTitle>
          Bem-Vindo! 😁
        </SubTitle>
        <ImageProfile />
        <ImageRender source={imageProfile} />
      </Heading>
    </>
  );
}