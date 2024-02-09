import { IoArrowBack } from 'react-icons/io5';
import { BackButton } from './styles';
import { useNavigate } from 'react-router-dom';

const GoBackButton = ({ returnTo }: { returnTo: string }) => {
  const navigate = useNavigate();
  return (
    <BackButton>
      <IoArrowBack
        size={30}
        color='#c19cce'
        onClick={() => {
          navigate(`/${returnTo}`);
        }}
      />
    </BackButton>
  );
};

export default GoBackButton;
