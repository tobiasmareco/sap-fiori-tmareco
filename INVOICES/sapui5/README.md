## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Thu Aug 03 2023 21:15:11 GMT+0000 (Coordinated Universal Time)|
|**App Generator**<br>@sap/generator-fiori-freestyle|
|**App Generator Version**<br>1.10.3|
|**Generation Platform**<br>SAP Business Application Studio|
|**Template Used**<br>simple|
|**Service Type**<br>None|
|**Service URL**<br>N/A
|**Module Name**<br>sapui5|
|**Application Title**<br>Invoices List|
|**Namespace**<br>invoices|
|**UI5 Theme**<br>sap_horizon|
|**UI5 Version**<br>1.116.0|
|**Enable Code Assist Libraries**<br>False|
|**Enable TypeScript**<br>False|
|**Add Eslint configuration**<br>False|

## sapui5

Invoices List App

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  In order to launch the generated app, simply run the following from the generated app root folder:

```
    npm start
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)


### **-------------------------------------------------------------**
## Curso Fiori

#### 4 - Creacion del Proyecto MTA

> ![creacion del proyecto](https://i.ibb.co/dKXJ6bt/4-creacion-proyecto.png  "Creacion Proyecto")
![Estructura Proyecto](https://i.ibb.co/QbCpfJt/4-1-estructura-proyecto.png  "Estructura del Proyecto")

#### 5 - Estructura Completa SAPUI5
> En esta sección estaremos viendo cual es el funcionamiento de cada archivo dentro de las Aplicaciones SAPUI5.

> **---5.1 Hola Mundo---**
>Una vez borrado todos los archivos , creamos el archivo **index.html** agregando un texto de **hello world** , el index.html representa el archivo estatico de la aplicacion.
!["Hello world message"](https://i.ibb.co/sF32BpT/image.png  "Hello World message")
> **---5.2 Bootstrapping---**
El bootstrapping representa la carga de la libreria SAPUI5 dentro de la Aplicacion para utilizar los componentes de SAPui.
dentro de la etiqueta `<script></script>`agregaremos los siguientes atributos.
 - **id**: Recomendado por SAP `sap-ui-bootstrap` </br>
- **src**: Ruta del sdk de sapui5 [SAPUI5-HANAONDEMAND](https://sapui5.hana.ondemand.com/resources/sap-ui-core.js "https://sapui5.hana.ondemand.com/resources/sap-ui-core.js") | | [SDK.OPENUI5]([sdk.openui5.org/resources/sap-ui-core.js](https://sdk.openui5.org/resources/sap-ui-core.js) "https://sdk.openui5.org/resources/sap-ui-core.js") </br>
- **data-sap-ui-theme**: Cargar el tema de la App. `sap_belize`.</br>
- **data-sap-ui-resourceroot**: Ruta de los recursos dentro de la Aplicacion `'{"invoices.sapui5":"./"}'`(namespace/carpeta del modulo).
- **data-sap-ui-compatVersion**: Version compatible con la ultima version de la libreria `edge`.
- **data-sap-ui-onInit**: Posibilidad de cargar un modulo al realizar la carga de la aplicacion `module:"invoices/sapui5/index"`.
- **data-sap-ui-async**: Carga asincrona de los componentes/libreria `true`.
- **data-sap-ui-frameOptions**: Solicitud de confianza de la carga de archivos `trusted`.
> Resultado final.![Bootstrapping](https://i.ibb.co/Hg6qxKb/image.png "Bootstrapping")
![Result](https://i.ibb.co/nbrHcnz/image.png "Resultado")

> ---**5.3**