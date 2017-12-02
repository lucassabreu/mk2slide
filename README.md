[![Stories in Ready](https://badge.waffle.io/lucassabreu/mk2slide.png?label=ready&title=Ready)](https://waffle.io/lucassabreu/mk2slide?utm_source=badge)
# mk2slide


A simple presentation generator from markdown files


## Usage:

### Create a presentation

Create a file like this: (presentation.md)

```
---
title: "My title"
width: 710px
height: 460px
---

# First slide

---

## Second slide

- item 1
- item 1
- item 1


---

## Conclusion

this is the conclusion

```

## Generate the HTML

```sh
mk2slide mypresentation.md
```

## PDF

mk2slide is optimized for PDF generation. To export to pdf you just have to "print" the slides on your browser and save it on PDF format.


## Further

To see advanced usage take a look at our examples directory.

----

Contributions are welcome.
