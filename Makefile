all: clean html

dist-folder:
	mkdir -p dist

html: dist-folder
	./build dist/slides.html

pdf: dist-folder
	./build dist/slides.pdf

clean:
	rm -rf dist
