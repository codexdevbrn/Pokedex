import { Card, Container, Name, IdTitle, Avatar } from './styles';
import { useNavigation } from '@react-navigation/native';

export interface PokeCardProps {
  name: string;
  id: string;
  types?: string[];
  avatar: string;
  backgrounColor: string;
}
export function PokeCard({
  name,
  id,
  types,
  avatar,
  backgrounColor,
}: PokeCardProps) {

  const navigation = useNavigation();

  function handleOpenGame({ id }: PokeCardProps) {
    navigation.navigate('about', { 
      name, id, avatar, backgrounColor, types
      });
  }
  
  return (
    <Container style={{ backgroundColor: backgrounColor }}
      onPress={() => handleOpenGame(id)}>
      <Card>
        <Name>{name[0].toUpperCase() + name.substring(1)}</Name>
      </Card>
      {types}
      <Card>
        <IdTitle>{`#${'000'.substr(id.toString().length)}${id}`}</IdTitle>
        <Avatar source={{ uri: avatar }} />
      </Card>
    </Container>
  );
}