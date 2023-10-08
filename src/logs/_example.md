---
title: example
ref_link: https://example.com
ref_title: Link to source material
---

Write notes here.

That’s about it. You can do `inline code` and code blocks like this:

```python
# My favourite python snippet.
def fib_gen():
    a, b = 1, 1
    while True:
        yield a
        a, b = b, a + b
```

> This is a blockquote.

You can probably put images in here, but I haven’t put any thought into that yet, so YMMV.

Anything in the `src/assets` folder gets sent directly to the website with processing, so
you should probably use that for sending images.
