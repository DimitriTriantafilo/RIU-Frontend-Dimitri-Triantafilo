# Riu-Frontend-Dimitri-Triantafilo

Proyecto desarrollado con [Angular CLI](https://github.com/angular/angular-cli) version 19.2.13, como challenge técnico para RIU,
una SPA donde se puede ver una lista paginada de super héroes, cada super héroe puede editarse y ser eliminado, podrá crearse super héroes nuevos.

## Pasos para testear la app

git clone https://github.com/DimitriTriantafilo/RIU-Frontend-Dimitri-Triantafilo.git
cd RIU-Frontend-Dimitri-Triantafilo
cd riu-frontend/
npm i

npm start;

una vez levantado el servidor ir a `http://localhost:4200/.

## Building

Para buildear proyecto :

```
npm run build
```

para levantar el proyecto con ssr:

```
npm run serve:ssr:riu-frontend
```

## Running unit tests

Para ejecutar las pruebas con [Karma](https://karma-runner.github.io) utilizar el siguiente comando:

```bash
ng test
```

## Correr con Docker

Para levantar la app (ssr) en docker utilizar el siguiente comando:

```bash
docker build -t riu-ssr .
```

luego

```bash
docker run -p 4000:4000 riu-ssr
```

y acceder en el navegador a http://localhost:4000, donde estará la imágen desplegada de la apliación
