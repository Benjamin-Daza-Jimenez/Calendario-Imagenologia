## Wiki
* Puede acceder a la Wiki mediante el siguiente [enlace](https://github.com/Zurickata/INF236-2023-2-GRUPO-8/wiki)


## Videos
* [Video presentación Hito 1](https://youtu.be/GlX_-8Jp7Is)
* [Video de resultados Hito 6 y 7](https://www.youtube.com/watch?v=bhuy0lvzOak)

## Explicación
* client: frontend
* server: backend
* node_modules no se sube a git, realizar pasos de ##Dependencias
* se levanta primero el servidor del backend y inicia el frontend 
* se usan tokens para saber si inició sesion (se realizó con IA)

## Ejecución
* Realizar la vinculación con la BD (MongoDB) desde: /server/Database/index.js
* Crear un .env en server, con una variable JWT_SECRET=<contraseña> y MONGO_PASSWORD=<contraseña del usuario admin en BD>
* npm run dev1 -> desde server
* npm run dev2 -> inicia un servidor que actualiza automáticamente cambios
* npm start -> desde client

## Dependencias
* npm install: client y server
* npm install react react-dom axios: client
* npm install express mongoose cors jsonwebtoken dotenv: server

## Comentarios
* Iniciar Sesión está listo, fue modificado y usa token para saber si está iniciado o no.
* Guardar hora ? 
* * Revisar como funciona
* * Arreglar
