import { auth } from '../../firebase';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { HomeDiv, HomeWrapper, LogoutButtonDiv } from './styles';

const Home = () => {
  const navigate = useNavigate();

  const currentUser = auth.currentUser;
  const username = currentUser ? currentUser.displayName : '';
  console.log(username);

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
        <LogoutButtonDiv>
          <button onClick={handleLogout}>
            <RiLogoutBoxLine />
            Logout
          </button>
        </LogoutButtonDiv>
      </HomeDiv>
    </HomeWrapper>
  );
};

export default Home;
