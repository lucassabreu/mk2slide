all: clean html

install:
	ln -s $(realpath ./mk2slide) /usr/local/bin/mk2slide

html:
	./mk2slide examples/CultureCode.md examples/CultureCode.html

pdf:
	./mk2slide examples/CultureCode.md examples/CultureCode.pdf

clean:
	rm -f examples/CultureCode.html examples/CultureCode.pdf
