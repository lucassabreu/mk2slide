all: clean html

html:
	./mk2slide examples/CultureCode.md examples/CultureCode.html

pdf:
	./mk2slide examples/CultureCode.md examples/CultureCode.pdf

clean:
	rm -f examples/CultureCode.html examples/CultureCode.pdf
