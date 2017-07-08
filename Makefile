all: clean html

html:
	./build html

pdf:
	./build pdf

clean:
	rm -f slide.html
