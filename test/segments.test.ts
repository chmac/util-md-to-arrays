import { split } from '../src';

describe('split segments', () => {
  it('splits simple segments', () => {
    const heading = `# A heading`;
    const para1 = `Followed by some text`;
    const para2 = `And a second paragraph\nwith some line breaks`;
    expect(split(`${heading}\n\n${para1}\n\n${para2}`)).toEqual([
      heading,
      para1,
      para2,
    ]);
  });
});
