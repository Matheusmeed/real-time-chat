import { CircularProgress } from '@material-ui/core';
import { Wrapper } from './styles';

const Loading = () => {
  return (
    <Wrapper>
      <CircularProgress color='inherit' size={30} />
    </Wrapper>
  );
};

export default Loading;
