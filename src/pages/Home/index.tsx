import { auth } from '../../firebase';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { HomeDiv, HomeWrapper, LogoutButton } from './styles';
import HomeCards from './components/HomeCards';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      navigate('/home');
      await auth.signOut();
    } catch (error) {
      toast.error('Erro ao fazer logout', {
        style: { background: '#ff00006e', color: '#FFFFFF' },
      });
    }
  };

  return (
    <HomeWrapper>
      <HomeDiv>
        <LogoutButton onClick={handleLogout}>
          <RiLogoutBoxLine />
          Logout
        </LogoutButton>
        <HomeCards />
      </HomeDiv>
    </HomeWrapper>
  );
};

export default Home;
