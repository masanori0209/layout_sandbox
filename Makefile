init:
	docker-compose run front npm install
	docker-comose up -d
up:
	docker-compsoe up -d
down:
	docker-compose down
build:
	docker-compose build
logs:
	docker-compsoe logs -f
ps:
	docker-compsoe ps
deploy:
	docker-compsoe exec front npm run deploy