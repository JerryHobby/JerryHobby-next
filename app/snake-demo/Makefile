SHELL = /bin/bash   # does not work with zsh
.PHONY: help

help: 	
	@echo "Usage: make [target]"
	@grep -E '^[a-zA-Z_-]+:.*?

all: $(objects) 	
	@echo "Building all objects"
	@cargo build

clean: 	
	@echo "Remove all generated files"
	@rm -rf target

docs: 	
	@cargo doc --no-deps --open

run: 	
	@cargo run

build: 	
	@wasm-pack build --target web

release: 	
	@cargo build --release

test: 	
	@cargo test

update: 	
	@cargo update

version: 	
	@cargo version

commit: 	
	@cargo commit

bench: 	
	@cargo bench

check: 	
	@cargo check

clippy: 	
	@cargo clippy

fmt: 	
	@cargo fmt

bump: 	
	@version=$$(cargo pkgid | cut -d'#' -f2)
	@echo "Current version: " $$(cargo pkgid | cut -d'#' -f2)
	@read -p "Enter new version: " version; \
	updated_version=$$(cargo pkgid | cut -d'#' -f2 | sed -E "s/([0-9]+\.[0-9]+\.[0-9]+)$$/$$version/"); \
	sed -i -E "s/^version = .*/version = \"$$updated_version\"/" Cargo.toml
	@echo "New version saved: $$(cargo pkgid | cut -d'#' -f2)"


