Build docker image & push to GitHub Packages registry with layers cache.

[![build](https://github.com/seanghay/docker-build-cache-node/actions/workflows/build.yml/badge.svg)](https://github.com/seanghay/docker-build-cache-node/actions/workflows/build.yml)

## Pull & Run

```shell
docker run -it --rm \
  -e "NODE_ENV=production" \
  -e "DEBUG=*" -p "8080:8080" \
  ghcr.io/seanghay/docker-build-cache-node:main
```

Endpoint: http://0.0.0.0:8080/

<a href="https://asciinema.org/a/pC7l3rMjTXdwjfjtAMVxgcB5w" target="_blank"><img src="https://asciinema.org/a/pC7l3rMjTXdwjfjtAMVxgcB5w.svg" /></a>

## Build & Run

```shell
echo "NODE_ENV=production" > .env && ./docker-build
```


View [Workflow](./.github/workflows/build.yml)

