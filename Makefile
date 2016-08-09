COMPOSE = docker-compose

.PHONY: build
build:
	rm -rf public/
	$(COMPOSE) build build
	$(COMPOSE) run build

.PHONY: checkstyle
checkstyle:
	$(COMPOSE) run checkstyle

.PHONY: fmt
fmt:
	$(COMPOSE) run fmt

.PHONY: watch
watch:
	./node_modules/.bin/gatsby develop -H localhost