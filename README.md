# Proyecto de Tickets del Departamento de Servicios de Salud
Proyecto del Grupo 1 de Ingeniería de Software.

## Descripción:
Este proyecto consiste en una aplicación web realizada para manejar los turnos del Departamento de Servicios de Salud de la Pontificia Universidad Católica Madre y Maestra. El mismo fue creado, utilizando un el framework Front End Angular 8, para el cliente, y el framework para el Back End, basado en node.js, Loopback 3 LTS.
Además, se utilizó la herramienta para gestionar colas de impresión desde un navegador, de nombre QZTray, la herramienta para análisis de datos Metabase, y se utilizó el manejador de base de datos PostgreSQL. 

## Ejecución:
Si se ha de correr de manera local, con fines de prueba, deben de tener los siguientes requisitos: 
* Node.js 10.16.3+ (o mayor).
* Angular CLI 8.0.1 (o mayor).
* Loopback 3(o mayor).
* Metabase: Descargar la versión .jar de metabase.
* PostgreSQL 9.6.
* QZTray 2.1 (o mayor).

Si se ha de correr desde el servidor, sólo debe de tenerse en la máquina de prueba instalado QZTray 2.1 (o mayor).

### Instrucciones para corrida local:
* Realizar un git clone del repositorio
* Proceder a la carpeta de nombre "proyecto-tickets" y correr los siguientes mandatos: node index.js y node . . Esto habilitará el servidor de la aplicación. 
* Proceder a la carpeta de nombre "test-app" y correr el siguiente mandato: ng serve.
* Proceder a la instalación local de metabase.jar, colocándolo en una carpeta independiente, y corriendo el mandato: java -jar metabase.jar. Luego, se requerirán unas credenciales para la composición o realización de dashboards para visualizar la data. 
* Ejecutar QZTray. 

### Instrucciones para corrida desde la máquina virtual de la universidad.
Para accesar a la red virtual privada de la universidad, debe de tenerse el software OpenVPN (Windows) u OpenForti (Linux). Para esto sólo se necesitan las credenciales de la universidad y una configuración que debe de ser solicitada a los colaboradores de este repositorio. 
De estar hábil, la máquina virtual debe de poseer las aplicaciones del servidor, del cliente, la base de datos, y el servicio de análisis de datos corriendo con un manejador de procesos. 
De esto ser así, sólo debe de ejecutarse QZTray localmente, y, seguido, acceder a 192.168.77.9:4200, para acceder a la aplicación.
