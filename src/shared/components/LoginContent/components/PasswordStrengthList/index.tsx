import { getPasswordErrors } from '../../../../util/strongPassword';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { ErrorDiv, ErrorText, ObservationWrapper } from './styles';

interface IStrongPasswordCheckProps {
  password: string;
}

const PasswordStrengthList = ({ password }: IStrongPasswordCheckProps) => {
  const passwordErrors = getPasswordErrors(password);
  return (
    <ObservationWrapper>
      {passwordErrors.map((error) => (
        <ErrorDiv key={error.message}>
          <AiOutlineCheckCircle
            color={error.hasError ? '#d2d2d2' : '#b1ffca'}
            size={20}
          />
          <ErrorText isMissing={error.hasError}>{error.message}</ErrorText>
        </ErrorDiv>
      ))}
    </ObservationWrapper>
  );
};

export default PasswordStrengthList;
