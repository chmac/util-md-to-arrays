import { split } from '../src';

const heading = `# A heading`;
const para1 = `Followed by some text`;
const para2 = `And a second paragraph\nwith some line breaks`;
const item1 = '- A list item';
const item2 = '- Another list item';
const nestedItem1 = '  - A nested item';
const nestedItem2 = '  - Another nested item';
const altItem1 = '* A star list item';
const altItem2 = '* Another star list item';
const nestedAltItem1 = '  * A star nested item';
const nestedAltItem2 = '  * Another star nested item';

describe('split segments', () => {
  it('#dBcLtk splits simple segments', () => {
    expect(split(`${heading}\n\n${para1}\n\n${para2}`)).toEqual([
      heading,
      para1,
      para2,
    ]);
  });

  it('#lYDAlL splits lists into nested arrays', () => {
    expect(split(`${para1}\n\n${item1}\n${item2}`)).toEqual([
      para1,
      [item1, item2],
    ]);
  });

  it('#FnB4gl does not split nested lists into nested arrays', () => {
    expect(
      split(
        `${heading}\n\n${para1}\n\n${item1}\n${nestedItem1}\n${nestedItem2}\n${item2}`
      )
    ).toEqual([
      heading,
      para1,
      [`${item1}\n${nestedItem1}\n${nestedItem2}`, item2],
    ]);
  });

  it('#XmtgDo splits star lists into nested arrays', () => {
    expect(split(`${heading}\n\n${altItem1}\n${altItem2}`)).toEqual([
      heading,
      [altItem1, altItem2],
    ]);
  });

  it('#0szgbC does not split nested star lists into nested arrays', () => {
    expect(
      split(`${item1}\n${nestedAltItem1}\n${nestedAltItem2}\n${item2}`)
    ).toEqual([[`${item1}\n${nestedAltItem1}\n${nestedAltItem2}`, item2]]);
  });
});
