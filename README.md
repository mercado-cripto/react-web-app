# Instalación

## Requerimientos locales

Node JS (nvm recomended) 11.15.0

- https://github.com/nvm-sh/nvm

Yarn or NPM

- https://classic.yarnpkg.com/en/docs/install/#debian-stable

## Desarrollo Local

Para levantar este proyecto, es necesario tener en cuenta que este front end las configuraciones a travez de un archivo .env
Este archivo se genera luego de desplegar el proyecto backend.

Si aun no has hecho este paso te recomiendo comenzar ahi. https://github.com/mercado-cripto/serverless-backend.

1.- Clonar este proyecto

```
git clone https://github.com/mercado-cripto/react-web-app.git
```

- cambiar nombre a archivo .env.sample a .env

  ```
  REACT_APP_apiGateway_REGION=us-east-1
  REACT_APP_apiGateway_URL=https://55555555.execute-api.us-east-1.amazonaws.com/prod
  ```

- Reemplazar los valores correspondientes, estos valores se obtienen al desplegar el proyecto. https://github.com/mercado-cripto/serverless-backend.

* Siga las instrucciones de despliegue de backend.

  `https://github.com/mercado-cripto/serverless-backend/README.md`

- Al tener las URL de los servicios y las configuraciones necesarias para el archivo .env proceda a levantar la web app.

  ```
  yarn start
  ```

# Contribuciones.

Si deseas aportar al proyecto:

- Fork repositorio

- Clonar repositorio

- Cree un branch por cada feature o cambio realizado.

- Realiza tu trabajo y realiza commits con nombres logicos.

- Pushea tu codigo a tu repositorio (fork)

- realiza un nuevo Pull Request a Mercado Cripto.
