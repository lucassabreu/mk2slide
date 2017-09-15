[![Stories in Ready](https://badge.waffle.io/lucassabreu/mk2slide.png?label=ready&title=Ready)](https://waffle.io/lucassabreu/mk2slide?utm_source=badge)
# mk2slide


A simple presentation generator from markdown files


## Usage:

```sh
mk2slide mypresentation.md
```

## Syntax

Use standard markdown with `---` to separate slides

### Header

Each presentation must contain a header like this:

```markdown
---
title: "Ecossistema CompuFácil"
width: 710px
height: 460px
colors:
headerEmphasis: \#fe7c00
---
```


### Fitting

If you want some text block to fill all the slide use the keyword {.fit}

Like this:

```markdown
# Somos um **time** {.fit}
```
## TODO

- A way of building off-line.
