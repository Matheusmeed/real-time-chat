import { CircularProgress } from '@material-ui/core';
import { Wrapper } from './styles';

const LoadingPage = () => {
  return (
    <Wrapper>
      <CircularProgress color='inherit' size={30} />
    </Wrapper>
  );
};

export default LoadingPage;
