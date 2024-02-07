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
      message: '8 Caracteres',
      hasError: !(password.length >= 8),
    },
    {
      message: 'Maiúscula',
      hasError: !shouldHave.upperCase.test(password),
    },
    {
      message: 'Minúscula',
      hasError: !shouldHave.lowerCase.test(password),
    },
    {
      message: 'Número',
      hasError: !shouldHave.oneNumber.test(password),
    },
    {
      message: 'Caractere Especial',
      hasError: !shouldHave.specialCharacter.test(password),
    },
  ];
  return passwordErrorsArr;
};
