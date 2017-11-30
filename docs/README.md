mk2slide
========

A simple presentation generator from markdown files

Basic Usage:
------------

To create a simple presentation, you need to create a markdown file with at least the following metadata:

```yaml
---
title: A Presentation Example
width: 800px
height: 600px
---
```

Then just add your content to your presentation, and to break into slides create a line with `---`.

To convert your markdown to HTML just the following comand:

```sh
mk2slide <presentation.md>
```

A example of a valid slide file is [examples/minimum.md](https://github.com/lucassabreu/mk2slide/blob/master/examples/minimum.md), it will generate this slide: [minimum.html](examples/minimum.html).

---

Full documentation: [click here](http://localhost:4000)
