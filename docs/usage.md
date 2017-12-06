Usage:
======

Here is a basic usage to create a slide, there is other features beyond the basic [here](moreusage.md)

Create a presentation
---------------------

Create a markdown file like this: (presentation.md)

```md
---
title: "My title"
width: 710px
height: 460px
---

# First slide

---

Second slide
------------

- item 1
- item 1
- item 1


---

Conclusion
----------

this is the conclusion

```

See the result here: https://mk2slide.github.io/examples/minimum.html

### Generate the HTML

```sh
mk2slide mypresentation.md
```

PDF
---

**mk2slide** generate slides that are optimized for PDF generation. To export to pdf you just have to "print" the slides on your browser and save it on PDF format.
