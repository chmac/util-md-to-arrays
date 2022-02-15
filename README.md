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
  'A paragraph',
  [
    '- Item 1\n  - Item 1.1\n  - Item 1.2',
    '- Item 2',
  ]
]
```