init:
	docker-compose run front npm install
	docker-comose up -d
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
deploy:
	docker-compose exec front npm run deploy