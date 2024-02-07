import { Card, CardsWrapper } from './styles';
import { MdOutlinePublic } from 'react-icons/md';
import { RiGitRepositoryPrivateFill } from 'react-icons/ri';
import { IoIosCreate } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const HomeCards = () => {
  const navigate = useNavigate();
  return (
    <CardsWrapper>
      <Card
        isLeft
        onClick={() => {
          navigate('/private');
        }}
      >
        <RiGitRepositoryPrivateFill size={100} color='#454545' />
        <h1>Salas Privadas</h1>
      </Card>
      <Card
        isCenter
        onClick={() => {
          navigate('/public');
        }}
      >
        <MdOutlinePublic size={100} color='#454545' />
        <h1>Salas Públicas</h1>
      </Card>
      <Card
        onClick={() => {
          navigate('/create');
        }}
      >
        <IoIosCreate size={100} color='#454545' />
        <h1>Criação de Salas</h1>
      </Card>
    </CardsWrapper>
  );
};

export default HomeCards;
