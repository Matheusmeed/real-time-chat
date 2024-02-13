export const generateRandomCode = (
  existingCodes: (number | undefined)[]
): number => {
  let newCode;
  do {
    newCode = Math.floor(10000 + Math.random() * 90000);
  } while (existingCodes.includes(newCode as number | undefined));

  return newCode;
};
