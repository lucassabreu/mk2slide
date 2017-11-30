all: clean html mermaid

install: ## install mk2slide globaly
	ln -s $(realpath ./mk2slide) /usr/local/bin/mk2slide

install-deps: ## install project dependencs
	yarn install

html: ## generate generic HTML slide
	./mk2slide examples/CultureCode.md examples/CultureCode.html

mermaid: ## generate Mermaid sample
	./mk2slide examples/mermaid.md

pdf: ## generate PDF sample
	./mk2slide examples/CultureCode.md examples/CultureCode.pdf

clean: ## clean generated files
	rm -f examples/CultureCode.html examples/CultureCode.pdf
	rm -f examples/mermaid.html

copy-examples:
	rm -r docs/examples
	cp -r examples docs/examples
	find docs/examples | grep '.md$$' | xargs rm

docs-build: copy-examples ## build the docs for release
	git submodule update --init
	cd site && git checkout master && git reset --hard master && git pull origin master
	yarn run release
	git add site

docs-serve: copy-examples ## start watch-server for the docs
	yarn run watch

# Absolutely awesome: http://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
help: ## show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-10s\033[0m %s\n", $$1, $$2}'
