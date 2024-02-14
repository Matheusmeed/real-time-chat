type PasswordErrorsType = { message: string; hasError: boolean };

const shouldHave = {
  upperCase: /(?=.*[A-Z])/,
  lowerCase: /(?=.*[a-z])/,
  oneNumber: /(?=.*\d)/,
  specialCharacter: /(?=.*[%?$*&@#!_.,-])/,
};

export const getPasswordErrors = (password: string) => {
  const passwordErrorsArr: PasswordErrorsType[] = [
    {
      message: '8 Characters',
      hasError: !(password.length >= 8),
    },
    {
      message: 'Uppercase',
      hasError: !shouldHave.upperCase.test(password),
    },
    {
      message: 'Lowercase',
      hasError: !shouldHave.lowerCase.test(password),
    },
    {
      message: 'Number',
      hasError: !shouldHave.oneNumber.test(password),
    },
    {
      message: 'Special Character',
      hasError: !shouldHave.specialCharacter.test(password),
    },
  ];
  return passwordErrorsArr;
};
