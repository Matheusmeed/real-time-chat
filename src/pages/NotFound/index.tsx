import { useNavigate } from 'react-router-dom';
import { Wrapper } from './styles';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <h1>Page Not Found</h1>
      <img
        src='/images/errors/access_denied.png'
        alt='NotFoundPageImage'
        width={300}
      />
      <p
        onClick={() => {
          navigate('/home');
        }}
      >
        Click here to be redirected to the home page
      </p>
    </Wrapper>
  );
};
