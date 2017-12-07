Fit
===

A element that has the class `.fit` on it will use the maximum space possible in the slide, without jumping over other elements in the same slide, or breaking out of it.

This feature was created to allow slides that had only a title or that have same part to be greatly emphasized to fit the maximum space as possible.

Here are some examples:

<iframe src="../examples/minimum.html" />

Support
-------

Today the `.fit` feature is only applicable to elements that suport [attributes through pandoc markdown support](https://pandoc.org/MANUAL.html#header-identifiers). We have a issue ([#27](https://github.com/lucassabreu/mk2slide/issues/27)) to look for a way to apply it to other elements like `bloquote`, `ul`, `ol` and other similar blocks.