# ChemicalBurette :ng:

:honeybee: Este proyecto es para llevar a un nivel más avanzado el conocimiento de Angular CLI.

*This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.*

## Obtener proyecto

Para obtener este proyecto y que funciones tienes que

- Descargarlo o clonar el repositorio
- Entrar en la carpeta generada y ejecutar `npm install`.
- Ejecutar `ng serve` y ver `http://localhost:4200/`.

El curso original es [Angular Avanzado: LLeva tus bases al siguiente nivel - MEAN](https://www.udemy.com/angular-avanzado-fernando-herrera/), es dictado por el Profesor **Fernando Herrera** en la Plataforma de [Udemy](https://www.udemy.com/).

## Clases vistas:

### Sección 4, Clase 29

Esta sección esta enfocada en módulos principalmente:

- Crear un módulo personalizado
- Crear rutas hijas
- Comenzaremos a crear módulos para agrupar tareas específicas
- Realizar cambios en GitHub
- Crear Release Tags que nos permitan descargar el código fácilmente, en caso de que necesitemos volver a comenzar donde nos quedemos.


### Sección 6, Clase 40

Esta sección esta dedicada a los componentes y el envío de información entre ellos.

- Trabajaremos con Outputs, Inputs y ViewChild
- Aprenderemos como utilizar atributos personalizados
- Crearemos un componente re utilizable con una funcionalidad en especifico
- Aprenderemos a tener referencias a elementos HTML
- Tips de JavaScript puro: colocar el foco en elementos
- Uso de gráficas como componentes personalizados


### Sección 8, Clase 68 *(Excelente Sección)*

Esta sección tiene por objetivo principal, trabajar con observables y promesas:

- Tendremos una introducción ilustrativa para explicar estos dos temas
- Trabajaremos con promesas y funciones que retornan promesas
- Aprenderemos a crear un observable manualmente
- Trabajaremos con operadores de los observables como: (Retry, Map, Filter y Next)
- Funciones que retornan observables
- Usaremos el conocimiento aprendido para crear un componente de seguimiento de la página actual
- Usaremos observables para leer parámetros de configuración de las rutas que son diferentes a los parámetros de las rutas por url
- Cambiaremos los metatags dependiendo de la página donde nos encontremos
- Cambiar el titulo de la página actual


### Sección 13, Clase 146

Esta sección tiene por objetivo implementar la seguridad de nuestra aplicación:

- Conectar el Front-end con el Back-end (login)
- Usar Sweet Alert para mostrar mensajes
- Errores de CORS
- Formas de habilitar el CORS en nuestro backend
- Login normal de usuario
- Login de Google
- LocalStorage para almacenar tokens
- Protección básica de rutas
- Logout

### Sección 15, Clase 178
Esta sección tiene 2 objetivos generales, el primero es crear un mantenimiento de usuarios completo y el segundo, es crear un componente re utilizable que nos permita subir fácilmente imágenes de Hospitales, Usuarios y Médicos.

Veremos sobre:

- Crear componente de usuarios
- Búsqueda de usuarios
- Borrar usuario
- Actualizar Rol del usuario
- Crear un modal para la subida de la imagen
- Emitir notificaciones de cambio en imagenes

### Sección 16, Clase 191 (sección soft :bowling:)

Esta sección tiene por objetivo poner a prueba todo lo aprendido hasta el momento, hay una tarea bastante grande que pueden demorar mínimo unos 20 minutos en hacerla  (si no se equivocan en nada)

Pero puntualmente, estos son los temas:

- Explicación de la tarea
- Documentos de la tarea
- Detalles sobre el pipe de las imagenes
- Resolución de la tarea
- Componente de Médico y Médicos
- Borrar médicos
- Crear nuevo médico
- Mostrar información en base a una selección de un hospital
- Cargar médico
- Actualizar registro de un médico

### Sección 17, Clase 212
En esta sección tocaremos los siguientes temas:

- Componente de búsqueda global
- Menú del lado del servidor
- AdminGuard - Un guard para verificar si es administrador
- Recuperar información del TOKEN desde el front-end sin comunicación intermedia
- Página 404 :astonished:
- Manejo de errores

### Sección 18, Clase 227 (:hammer:)
Esta sección esta orientada a realizar optimizaciones en nuestra aplicación y back-end:

- Lazyload
- Función para renovar el token
- Guard de renovación de token
- Leer el token localmente sin comunicación con el servidor
- Optimizar el tiempo de renovación de token
- Resolver problema con las imágenes mal ubicadas en la versión de distribución
- Crear la versión de distribución

## Sección de Pruebas

En las siguientes secciones aprenderemos las distintas formas de realizar pruebas unitarias y de integración con Angular.
El ejemplo de esta secciones y ejercicio se encuentra en el siguiente repositorio [PruebasAngular-spec](https://github.com/HarryAlvarado28/PruebasAngular-spec).

### Sección 19, Clase 240
Esta es una sección pequeña introductoria al tema de las pruebas de integración y unitarias. Hay dos clases explicativas para comprender un poco más sobre las pruebas.

Esta parte del curso, parte de cero, ya que anteriormente no he cubierto este tema, por lo que si eres experto en esto, posiblemente valga la pena saltarse la siguiente sección y comenzar con las pruebas unitarias intermedias/avanzadas.

Las pruebas están ubicadas en 4 categorías:

- Básicas - realmente son las pruebas más simples que nos ayudarán a iniciar
- Intermedias - Son pruebas con una pequeña dificultad
- Intermedias 2 - Son pruebas con un poco más de complejidad
- Avanzadas - Son pruebas que ya usan diversos servicios y construcción personalizada para usar servicios falsos controlados por nosotros

### Sección 20, Clase 245
Sección dedicada a las pruebas unitarias propiamente, son pruebas muy básicas, por lo que si eres conocedor del tema, las sentirás aburridas.

- Probaremos Strings
- Números
- Booleanos
- Arreglos
- Clases
- Cobertura de nuestras pruebas.

La cobertura sobre las pruebas, nos ayudará a saber que tantas líneas de nuestro código están cubiertas y respaldadas por pruebas unitarias

### Sección 21, Clase 257
Esta sección trabaja con pruebas un poco más complejas y reales:

- Pruebas sobre Event Emitter
- Formularios
- Validaciones
- Saltar pruebas
- Espías
- Simular retornos de servicios
- Simular llamado de funciones

Esta sección da fundamentos muy valiosos para realizar pruebas unitarias y de integración

### Sección 22, Clase 271
Esta sección se enfoca en las pruebas de integración:

- Aprender la configuración básica de una prueba de integración
- Comprobación básica de un componente
- TestingModule
- Archivos SPEC generados automáticamente por el AngularCLI
- Pruebas en el HTML
- Revisar inputs y elementos HTML
- Separación entre pruebas unitarias y pruebas de integración

### Sección 23, Clase 285
Esta sección es un verdadero reto, especialmente entre más te vas acercando al final de la misma. Aquí veremos temas como:

- Revisar la existencia de una ruta
- Confirmar una directiva de Angular (router-outlet y routerLink)
- Errores por selectores desconocidos
- Reemplazar servicios de Angular por servicios falsos controlados
- Comprobar parámetros de elementos que retornen observables
- Subject
- Gets
