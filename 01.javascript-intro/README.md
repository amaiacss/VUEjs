# Proyecto inicial - Reforzamiento de JavaScript

* Lo primero que debemos de hacer después de descargar el código es ejecutar el comando:(si no está ya instalado)

```
npm install
```
Ese comando descargará todos los módulos de node necesarios para ejecutar el proyecto.

* Para descargar todos los modulos de Node que nuestro proyecto necesita ejecutar en la terminal, situada en la carpeta que se encuentra el proyecto:

```
npm i
```

* Cuando termine de instalar los node_modules, entonces podremos ejecutar el proyecto de con el siguiente comando. Este comando hace referencia a un script que se encuentra en package.json. Esto lo que hace es levantar el servidor de nuestro proyecto en modo desarrollo

```
npm start
```

Para que eso funcione, recuerden que deben de ejecutar ese comando en el mismo directorio donde se encuentra el ```package.json```

## Cambiar el puerto
Por defecto, el puerto que configuré para este proyecto es el ```8081```, pero si necesitan cambiarlo porque pueda que ese puerto lo use su computadora, pueden cambiarlo abriendo el ```package.json``` >> scripts. Ahí verán la instrucción que lanza el servidor de desarrollo

```
"start": "webpack-dev-server --mode development --open --port=8081"
```

Simplemente cambian el puerto por el que ustedes necesiten y listo. (lógicamente graban los cambios antes de ejecutar el ```npm start``` nuevamente)


