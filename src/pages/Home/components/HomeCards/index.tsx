import { Card, CardsWrapper } from './styles';
import { MdOutlinePublic } from 'react-icons/md';
import { RiGitRepositoryPrivateFill } from 'react-icons/ri';
import { IoIosCreate } from 'react-icons/io';

const HomeCards = () => {
  return (
    <CardsWrapper>
      <Card isLeft>
        <RiGitRepositoryPrivateFill size={100} color='#454545' />
        <h1>Salas Privadas</h1>
      </Card>
      <Card isCenter>
        <MdOutlinePublic size={100} color='#454545' />
        <h1>Salas Públicas</h1>
      </Card>
      <Card>
        <IoIosCreate size={100} color='#454545' />
        <h1>Criação de Salas</h1>
      </Card>
    </CardsWrapper>
  );
};

export default HomeCards;
