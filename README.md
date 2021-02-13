![](https://firebasestorage.googleapis.com/v0/b/hp-flink.appspot.com/o/favicon.png?alt=media&token=759a4d40-9c31-4a08-b8f0-998d090d27f2)

# HP-Flink

Proyecto prueba para Flink

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

## Docker
El proyecto contiene el Dockerfile, sin embargo también se puede clonar desde los repositorios de Docker | [Repo](https://hub.docker.com/r/makoneth/hp-flink)

## Docker build
```
docker build -t makoneth/hp-flink .
```
## Docker server
```
docker run -it -p 8080:8080 --rm --name hp-flink makoneth/hp-flink
```