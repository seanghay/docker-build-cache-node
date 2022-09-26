#!/usr/bin/env bash
docker buildx build -t docker-build-cache-node:$1 .

docker run -it --rm -p 8080:8080 --env-file .env docker-build-cache-node:$1

