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
