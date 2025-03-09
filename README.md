# Node-School

## Acerca del proyecto

Este es un proyecto de prueba conectado a mi cuenta trial de BTP. Dentro de BTP, creé una base de datos y la vinculé con el proyecto en CAP CDS para gestionar y exponer los datos de forma estructurada y un node para la lógica  empresarial. Cuenta con tres servicios bindeados. Un servicio de seguridad xsuaa y el servicio de destination para poder consumir los datos del CAP-CDS mediante los servicios Odata.

## Clean Architecture

Este proyecto sigue los principios de Clean Architecture, manteniendo una separación clara entre capas para garantizar modularidad, escalabilidad y mantenibilidad.

## Pre-requisitos
    
Para ejecutar este proyecto de forma local, es necesario contar con los siguientes requisitos previos:

Cuenta en SAP BTP

Debes tener una cuenta en SAP Business Technology Platform (BTP) con acceso a SAP HANA Cloud para la base de datos y un CAP-CDS. usar de ejemplo https://github.com/jcrnieto/CapCds-School
Si aún no tienes una, puedes registrarte en la versión trial.
Desplegar el proyecto en BTP

El proyecto debe estar desplegado en SAP BTP. En mi caso utilizé un archivo manifest.yaml para el deploy del mismo.

Para ejecutar el proyecto localmente, es necesario generar un archivo default-env.json.

Herramientas necesarias

Versión de **NodeJS ^18**.
@sap/cds-dk instalado globalmente (npm i -g @sap/cds-dk)
CF CLI (Cloud Foundry CLI) para desplegar en BTP.

## Despliegue
Este proyecto puede ejecutarse localmente o desplegarse en SAP BTP.

🔹 Ejecutar localmente
Para correr el proyecto en tu entorno local, sigue estos pasos:

Clonar el repositorio

git clone <URL_DEL_REPO>
cd <NOMBRE_DEL_PROYECTO>
Instalar dependencias

npm install

Configurar las credenciales del node en BTP

Asegúrate de tener un archivo default-env.json en la raíz del proyecto con las credenciales (ver sección de Pre-requisitos).
Ejecutar el servidor CAP localmente

npm run dev
Esto iniciará el servicio en http://localhost:3000/ y actualizará automáticamente los cambios en tiempo real.

🌍 Desplegar en SAP BTP
Para desplegar el proyecto en SAP BTP, sigue estos pasos:

Pararse en el archivo srv: cd srv 

Iniciar sesión en Cloud Foundry (CF CLI)

cf login -a https://api.cf.<region>.hana.ondemand.com
(Reemplaza <region> por la región donde tienes tu cuenta, como us10 o eu10).

Compilar y preparar el proyecto

cf push

Verificar el despliegue

Una vez finalizado, puedes revisar el estado de la aplicación con:

cf apps

Y acceder a la URL generada para tu servicio.


