import { split } from '../src';

const text = `## Heading

- https://foo.bar
  - A note about this link
- https://bar.baz
  - Another note`;

describe('split segments', () => {
  it('#dBcLtk splits simple segments', () => {
    expect(split(text)).toEqual([
      '## Heading',
      [
        '- https://foo.bar\n  - A note about this link',
        '- https://bar.baz\n  - Another note',
      ],
    ]);
  });
});
