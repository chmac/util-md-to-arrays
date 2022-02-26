# util-md-to-arrays

Given a markdown segment like:

```
A paragraph

- Item 1
  - Item 1.1
  - Item 1.2
- Item 2
```

This utility will return an array like:

```javascript
[
  `A paragraph`,
  [
    `- Item 1\n  - Item 1.1\n  - Item 1.2`,
    `- Item 2`,
  ]
]
```

Or put differently, the markdown input will be split into an array of segments,
and any lists will be further split into an array of items. Note that nested
lists are included as part of the parent list.

Also note that frontmatter is not supported and any input string which begins
with `---\n` will throw.
