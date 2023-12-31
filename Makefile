# Next.JS / WASM Makefile

SHELL = /bin/bash   # does not work with zsh
.PHONY: help

## Variables
PROJECT=JerryHobby.com
PROJECT_PATH=~/source/JerryHobby

## Help
help: ## Show this help
	@echo "Usage: make [target]"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'



## Modules
MODULES=chess snake

modules: $(MODULES) ## Build all modules

chess: ## Build chess module
	@cd $(PROJECT_PATH)/app/chess && cargo update
	@cd $(PROJECT_PATH)/app/chess && wasm-pack build --target web

snake: ## Build snake module
	@cd $(PROJECT_PATH)/app/snake_game && cargo update
	@cd $(PROJECT_PATH)/app/snake_game && wasm-pack build --target web


## Build commands
all: release ## Build all objects for production
	@echo "Building all objects"

install: git_pull npm_update all pm2_restart ## Run only on the server to rebuild all objects and restart server

clean: ## Remove all generated files
	@echo "Remove all generated files"
	@find . -type d -name "pkg" -exec rm -rf {} \;
	@find . -type d -name "target" -exec rm -rf {} \;

test: ## Run tests



## Server commands
pm2_restart: ## Restart pm2
	@pm2 restart $(PROJECT)

git_pull: ## Pull from git
	@git restore package-lock.json
	@git pull

npm_update: ## Update npm packages
	@npm install
	@npm update


## NPM commands
dev: ## Run the site in dev mode
	@npx prisma generate client
	@npm run dev

start:   ## Build and run in prod mode
	@npm run start

release: modules ## Build the program for release
	@npx prisma generate client
	@npm run build

lint: ## Run eslint
	@npm run lint

## bump needs to be configured for each module
bump: ## Bump version - will prompt for new version number
	@version=$$(cargo pkgid | cut -d'#' -f2)
	@echo "Current version: " $$(cargo pkgid | cut -d'#' -f2)
	@read -p "Enter new version: " version; \
	updated_version=$$(cargo pkgid | cut -d'#' -f2 | sed -E "s/([0-9]+\.[0-9]+\.[0-9]+)$$/$$version/"); \
	sed -i -E "s/^version = .*/version = \"$$updated_version\"/" Cargo.toml
	@echo "New version saved: $$(cargo pkgid | cut -d'#' -f2)"
