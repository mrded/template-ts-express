APP_NAME = template-ts-express

.PHONY: build-development 
build-development: 
	npm ci
	docker build --target development -t $(APP_NAME):development .

.PHONY: run-development 
run-development: 
	docker run -it --rm \
		--volume $(PWD)/src:/app/src \
		--volume $(PWD)/node_modules:/app/node_modules \
		--publish 3000:3000 \
		--name $(APP_NAME)-development \
		$(APP_NAME):development

.PHONY: build-production
build-production:
	docker build --target production -t $(APP_NAME):production .

.PHONY: run-production
run-production:
	docker run -it --rm \
		--publish 3000:3000 \
		--name $(APP_NAME)-production \
		$(APP_NAME):production 
