---
title: "Mermaid Demos"
width: 910px
height: 660px
use-mermaid: true
mermaid:
    style: https://mermaidjs.github.io/mermaid-live-editor/index.bundle.css
---

# Demos

---

### sequenceDiagram

```mermaid
sequenceDiagram
    Alice ->> Bob: Hello Bob, how are you?
    Bob-->>John: How about you John?
    Bob--x Alice: I am good thanks!
    Bob-x John: I am good thanks!
    Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

    Bob-->Alice: Checking with John...
    Alice->John: Yes... John, how are you?
```
