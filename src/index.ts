// NOTE: Keeping all functions in a single file for now so this module can be
// easily used by deno without any transpiling.

export const _isAList = (input: string): boolean => {
  if (input.startsWith('- ')) {
    return true;
  }
  if (input.startsWith('* ')) {
    return true;
  }
  return false;
};

export const _isAListItem = (input: string): boolean => {
  const trimmed = input.trimStart();
  return _isAList(trimmed);
};

export const _hasFrontmatter = (input: string): boolean => {
  if (!input.startsWith('---\n')) {
    return false;
  }

  // Some better test...
  return true;
};

export const split = (input: string): (string[] | string)[] => {
  if (_hasFrontmatter(input)) {
    throw new Error('Frontmatter not supported');
  }

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

      const head = acc.slice(0, -1);
      const last = acc[length - 1];
      const lastAndCurrent = `${last}\n${line}`;
      return head.concat(lastAndCurrent);
    }, []);

    return list;
  });

  return subDivided;
};
