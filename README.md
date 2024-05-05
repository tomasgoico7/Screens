# Pantallas - Challenge

Este proyecto proporciona una interfaz de usuario para ver, crear, editar y eliminar pantallas . Permite a los usuarios autenticados realizar estas acciones a través de una API.

[Link a la App Desployada](https://challenge-screens-goico.netlify.app/)

## Características principales:

- **Vista de lista de pantallas:** Muestra una lista paginada de pantallas digitales con opciones de filtrado por nombre y tipo.
- **Creación de pantallas:** Permite a los usuarios crear nuevas pantallas digitales ingresando información como nombre, descripción, precio, resolución y tipo.
- **Detalle de pantalla:** Proporciona información detallada sobre una pantalla digital específica, incluida su imagen, nombre, descripción, precio, resolución y tipo.
- **Edición de pantalla:** Permite a los usuarios editar la información de una pantalla digital existente.
- **Eliminación de pantalla:** Permite a los usuarios eliminar una pantalla digital existente.
- **Autenticación de usuario:** Requiere que los usuarios inicien sesión para acceder a las funcionalidades de gestión de pantallas.

## Tecnologías utilizadas:

- **Frontend:** Desarrollado con React.js para la interfaz de usuario.
- **Estilos:** Estilos CSS personalizados para el diseño y la apariencia.
- **Rutas:** React Router para la navegación entre páginas.
- **Gestión de estado:** Utilización de useState y useEffect para la gestión del estado local.
- **Comunicación con la API:** Utilización de axios para realizar peticiones HTTP a la API.
- **Autenticación:** Utilización de tokens JWT para la autenticación de usuario.

## Ejecución del proyecto:

1. **Clonar el repositorio:**

```bash
git clone https://github.com/tomasgoico7/Screens
```

2. **Instalar dependencias:**

```bash
cd Screens
npm install
```

3. **Ejecutar la aplicación:**

```bash
npm run start
```

4. **Acceder a la aplicación:**
   Abre un navegador web y navega a localhost dado en la sentencia anterior.

## Notas adicionales:

- Si encontras algún problema durante la ejecución del proyecto, verifica la consola del navegador para obtener mensajes de error detallados.

## Decisiones de Diseño

### Estructura de Carpetas

La estructura de carpetas se diseñó de manera que refleje la organización lógica del proyecto y facilite la navegación y mantenimiento del código. A continuación, se detalla la razón detrás de cada carpeta:

- **src/:** Contiene el código fuente de la aplicación.
- **components/:** Aquí se encuentran los componentes reutilizables de la aplicación, incluyendo sus estilos y su lógica.
- **pages/:** Contiene los componentes que representan las distintas páginas de la aplicación.
- **styles/:** Almacena los archivos de estilo CSS.
- **main.jsx:** Punto de entrada principal de la aplicación.
- **ScreenApp.jsx:** Componente principal que sirve como contenedor de todas las páginas.

### Decisión de Organización

- **Componentes Reutilizables:** La carpeta components/ se utiliza para almacenar componentes reutilizables que pueden ser utilizados en múltiples partes de la aplicación. Esto promueve la modularidad y la reutilización del código.
- **Páginas Independientes:** Los componentes de página se agrupan en la carpeta pages/, lo que facilita la navegación y comprensión de la estructura de la aplicación. Cada archivo representa una página independiente de la aplicación.
- **Estilos Separados:** Se optó por mantener los estilos de cada componente dentro de cada uno, lo que facilita la gestión de estilos y mejora la legibilidad del código
