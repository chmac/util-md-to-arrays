import { _hasFrontmatter, _isAList, _isAListItem } from '../src/utils';

const item1 = `- A list item`;
const item2 = `- Another list item`;
const notItem1 = `-Almost a list item`;
const nestedItem1 = `  - A second list item`;
const nestedItem2 = `\t- A second list item`;

describe('utils', () => {
  describe('_isAListItem()', () => {
    it('#Aa8H2D returns true for a - list', () => {
      expect(_isAListItem(item1)).toEqual(true);
    });

    it('#aHQTte returns false for a -list', () => {
      expect(_isAListItem(notItem1)).toEqual(false);
    });

    it('#gywNaV returns true for a space nested list item', () => {
      expect(_isAListItem(nestedItem1)).toEqual(true);
    });

    it('#R9DfxS returns true for a tab nested list item', () => {
      expect(_isAListItem(nestedItem2)).toEqual(true);
    });
  });

  describe('_isAList()', () => {
    it('#zyLvGp returns true for an un-nested list', () => {
      expect(_isAList(`${item1}\n${item2}`)).toEqual(true);
    });

    it('#wisTQu returns false for a nested list', () => {
      expect(_isAList(`${nestedItem1}\n${nestedItem2}`)).toEqual(false);
    });
  });

  describe('_hasFrontmatter()', () => {
    it('#iz3vrn Returns true for a string with frontmatter', () => {
      expect(_hasFrontmatter(`---\nfoo:bar\n---\n#A heading`)).toEqual(true);
    });

    it('#7Qwcuz returns false for a string without frontmatter', () => {
      expect(_hasFrontmatter(`${item1}\n${item2}`)).toEqual(false);
    });
  });
});
