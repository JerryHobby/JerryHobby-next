SHELL = /bin/bash   # does not work with zsh
.PHONY: help


help: ## Show this help
	@echo "Usage: make [target]"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'


clean: ## Remove all generated files
	@echo "Remove all generated files"
	@rm -rf target


## RUST Commands

docs: ## Generate documentation
	@cargo doc --no-deps --open

build: ## Build the program
	@wasm-pack build --target web

test: ## Run tests
	@cargo test

update: ## Update dependencies
	@cargo update

version: ## Show version
	@cargo version

commit: ## Commit changes
	@cargo commit

bench: ## Run benchmarks
	@cargo bench

check: ## Check the program
	@cargo check

clippy: ## Run clippy linter
	@cargo clippy

fmt: ## Format the code
	@cargo fmt



bump: ## Bump version - will prompt for new version number
	@version=$$(cargo pkgid | cut -d'#' -f2)
	@echo "Current version: " $$(cargo pkgid | cut -d'#' -f2)
	@read -p "Enter new version: " version; \
	updated_version=$$(cargo pkgid | cut -d'#' -f2 | sed -E "s/([0-9]+\.[0-9]+\.[0-9]+)$$/$$version/"); \
	sed -i -E "s/^version = .*/version = \"$$updated_version\"/" Cargo.toml
	@echo "New version saved: $$(cargo pkgid | cut -d'#' -f2)"


