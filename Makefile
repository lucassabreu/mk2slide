all: clean html mermaid

install:
	ln -s $(realpath ./mk2slide) /usr/local/bin/mk2slide

html:
	./mk2slide examples/CultureCode.md examples/CultureCode.html

mermaid:
	./mk2slide examples/mermaid.md

pdf:
	./mk2slide examples/CultureCode.md examples/CultureCode.pdf

clean:
	rm -f examples/CultureCode.html examples/CultureCode.pdf
	rm -f examples/mermaid.html

docs-build:
	git submodule update --init
	cd site && git checkout master && git reset --hard master && git pull origin master
	git submodule update --init
	yarn run release

docs-serve:
	yarn run watch
