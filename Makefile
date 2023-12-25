SHELL = /bin/bash   # does not work with zsh
.PHONY: help
PROJECT=JerryHobby.com
PROJECT_PATH=~/source/JerryHobby


## Modules
MODULES=chess snake

modules: $(MODULES) ## Build all modules

chess: ## Build chess module
	@cd $(PROJECT_PATH)/app/chess && wasm-pack build --target web

snake: ## Build snake module
	@cd $(PROJECT_PATH)/app/snake_game && wasm-pack build --target web





## Help
help: ## Show this help
	@echo "Usage: make [target]"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'


git_pull: ## Pull from git
	@git restore package-lock.json
	@git pull

npm_update: ## Update npm packages
	@npm install
	@npm update

pm2_restart: ## Restart pm2
	@pm2 restart $(PROJECT)

all: release ## Build all objects for production
	@echo "Building all objects"


clean: ## Remove all generated files
	@echo "Remove all generated files"
	find . -type d -name "pkg" -exec rm -rf {} \;
	find . -type d -name "target" -exec rm -rf {} \;

## NPM commands

dev: ## Run the site in dev mode
	@npx prisma generate client
	@npm run dev

start: release   ## Build and run in prod mode
	@npm run start

release: modules ## Build the program for release
	@npx prisma generate client
	@npm run build

lint: ## Run eslint
	@npm run lint


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



## Server commands

install: git_pull npm_update all pm2_restart ## Run only on the server to rebuild all objects and restart server

