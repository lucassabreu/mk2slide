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

Then just add your content to your presentation, and to start a new slide insert a line with only `---`.

To convert your markdown to HTML just the following comand:

```sh
mk2slide <presentation.md>
```

A example of a valid slide file is [examples/minimum.md](https://github.com/lucassabreu/mk2slide/blob/master/examples/minimum.md), it will generate this slide: [minimum.html](https://mk2slide.github.io/examples/minimum.html).

---

**mk2slide** is a open source project that exists by the help of our [contributors](https://github.com/lucassabreu/mk2slide/graphs/contributors), and use of other open source projects.

If you wanna help us, or just take a look, the source are at: https://github.com/lucassabreu/mk2slide

Found a bug 🐛 or request a feature, report here: https://github.com/lucassabreu/mk2slide/issues/new

Contributions are welcome 😄.
