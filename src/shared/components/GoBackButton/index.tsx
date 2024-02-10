import { IoArrowBack } from 'react-icons/io5';
import { BackButton } from './styles';
import { useNavigate } from 'react-router-dom';

const GoBackButton = ({
  returnTo,
  dark,
}: {
  returnTo: string;
  dark?: boolean;
}) => {
  const navigate = useNavigate();
  return (
    <BackButton dark={!!dark}>
      <IoArrowBack
        size={30}
        color={dark ? '#00000091' : '#d5d5d5'}
        onClick={() => {
          navigate(`/${returnTo}`);
        }}
      />
    </BackButton>
  );
};

export default GoBackButton;
