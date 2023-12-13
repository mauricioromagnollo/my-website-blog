help: ## Print available commands
	$(info ========================================)
	$(info Available Commands:)
	@grep '^[[:alnum:]_-]*:.* ##' $(MAKEFILE_LIST) \
		| awk 'BEGIN {FS=":.* ## "}; {printf "make %-25s %s\n", $$1, $$2};'
	$(info ========================================)
.PHONY: help

dev: ## Run development mode
	@npm run dev
.PHONY: dev

test: ## Run all tests
	@npm run test
.PHONY: server

test-watch: ## Run all tests in watch mode
	@npm run test:watch
.PHONY: test-watch

test-coverage: ## Run all tests with coverage
	@npm run test:coverage
.PHONY: test-coverage
