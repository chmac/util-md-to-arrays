export const split = (input: string): (string[] | string)[] => {
  const segments = input.split('\n\n');
  return segments;
};
