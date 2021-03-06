init:
	docker-compose run vue npm install
	docker-compose run react npm install
	docker-compose up -d
up:
	docker-compose down
	docker-compose up -d
down:
	docker-compose down
build:
	docker-compose build
logs:
	docker-compose logs -f
ps:
	docker-compose ps
deploy-vue:
	cp -r .git ./front
	docker-compose exec vue npm run build
	docker-compose exec vue npm run deploy
	rm -rf ./front/.git