![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# **DRIVERS** | Proyecto Individual

## **📌 OBJETIVO**

-  Construir una Single Page Application utlizando las tecnologías: **React**, **Redux**, **Node**, **Express** y **Sequelize**.

<br />


## **📋 SOBRE LA API DRIVERS...**

Para iniciar la ejecución, primeramente se deberá:

En la carpeta **`server`** crear un archivo llamado: **`.env`** que tenga la siguiente forma:

   ```env
       DB_USER=usuariodepostgres
       DB_PASSWORD=passwordDePostgres
       DB_HOST=localhost
   ```

Reemplazar **`usuariodepostgres`** y **`passwordDePostgres`** con tus propias credenciales para conectarte a postgres.
Adicionalmente será necesario crear, **desde psql (shell o PGAdmin)**, una base de datos llamada **`drivers`**.
   
Luego posicionados en la carpeta 'Back' deberemos inicializar por consola los siguientes comandos:

```
   npm i
```
Luego de instaladas las dependencias, ejecutar 
```
   npm start
```
para empezar a correr el servidor de manera local. Podrás ver el siguiente mensaje en tu terminal:

``` 
...
[0] [nodemon] watching extensions: js,mjs,json
[0] [nodemon] starting `node index.js`
[0] Server listening on port 3001

```
<br />

Posicionados en la carpeta 'Front'

```
   npm i
```

Luego de instaladas las dependencias, ejecutar 
```
   npm start
```
Para inicializar el proyecto y visualizarlo desde el navegador web

<br />

---

## **📖 Objetivo del Proyecto**

La idea de este proyecto fue construir una aplicación web a partir de la API [**drivers**] en la que se pueda:

-  Buscar corredores.
-  Visualizar la información de los corredores.
-  Filtrarlos.
-  Ordenarlos.
-  Dar de Alta (Crear) nuevo corredor.

<br />
<br />
<br />


### Algunos EndPoints utilizados por medio de ThunderClient, podria ser tambien en Postman, Insmonia etc

#### **📍 Petición de tipo ***GET*** a la ruta: localhost:3001/drivers**

-Obtener todos los conductores disponibles tanto de la API como de la DB.

#### **📍 Petición de tipo ***GET*** a la ruta: localhost:3001/drivers/:idDriver**

-  Esta ruta obtiene el detalle de un conductor específico. 

#### **📍 Petición de tipo ***GET*** a la ruta: localhost:3001/drivers/name?="..."**

-  Esta ruta obtendrá los conductores encontrados por ese nombre.

#### **📍 Petición de tipo ***POST*** a la ruta: localhost:3001/drivers**

- Esta ruta creara un nuevo conductor en la base de datos.

#### **📍Petición de tipo ***GET*** a la ruta: localhost:3001/teams**

-  Esta ruta obtiene los equipos(escuderías) existentes.


<br />

---

<br />



<div align="center">
<img src="./F1.svg" alt="" style="margin-top: 30px; width: 300px;" />
</div>
