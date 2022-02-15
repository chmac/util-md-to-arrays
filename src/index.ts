import { _isAList } from './utils';

export const split = (input: string): (string[] | string)[] => {
  const segments = input.split('\n\n');

  const subDivided = segments.map(segment => {
    if (!_isAList(segment)) {
      return segment;
    }

    const list = segment.split('\n').reduce<string[]>((acc, line) => {
      if (_isAList(line)) {
        return acc.concat(line);
      }

      const length = acc.length;
      if (length === 0) {
        throw new Error('#Twnv2o Unexpected logic error');
      }

      const head = acc.splice(0, length - 1);
      const last = acc[length - 1];
      const lastAndCurrent = `${last}\n${line}`;
      return head.concat(lastAndCurrent);
    }, []);

    return list;
  });

  return subDivided;
};
