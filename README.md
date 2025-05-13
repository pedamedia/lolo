# Proyecto Web para Trámites de Posgrado

Este proyecto fue desarrollado en colaboración con el profesor Fernando Mesa, exdirector del Departamento de Mecánica y Mecatrónica de la Facultad de Ingeniería de la Universidad Nacional de Colombia, sede Bogotá. La aplicación tiene como objetivo automatizar y optimizar el manejo de archivos y solicitudes para estudiantes en trámites de posgrado.

## Descripción

La página web permite la sincronización automática de archivos desde un Drive institucional hacia la plataforma, facilitando su visualización y gestión para estudiantes en procesos de posgrado. Adicionalmente, soporta el proceso inverso, permitiendo guardar de manera organizada las solicitudes y documentos relacionados con la facultad.

## Funcionalidades

* **Sincronización Automática:** Carga de archivos desde un Drive institucional a la página web.
* **Visualización de Documentos:** Permite la visualización rápida y ordenada de los archivos.
* **Gestión de Solicitudes:** Organización y almacenamiento de solicitudes de estudiantes.
* **Descarga y Respaldo:** Posibilidad de descargar los documentos almacenados de manera segura.

## Tecnologías Utilizadas

* **Frontend:** React, TailwindCSS
* **Backend:** Node.js, Express
* **Base de Datos:** MongoDB
* **Cloud Storage:** Google Drive API

## Instalación

1. Clonar el repositorio:

```bash
 git clone <url-repositorio>
```

2. Instalar dependencias del frontend y backend:

```bash
 cd frontend && npm install
 cd ../backend && npm install
```

3. Configurar las variables de entorno para la integración con Google Drive y la base de datos MongoDB.

4. Iniciar el servidor:

```bash
 cd backend && npm run dev
```

5. Iniciar el frontend:

```bash
 cd ../frontend && npm start
```

## Contribución

Si quieres contribuir al proyecto, por favor realiza un fork del repositorio y crea un pull request con los cambios propuestos.

## Créditos

* **Juan Andrés Mayorga Zuluaga** - Desarrollador
* **Fernando Mesa** - Colaborador y Exdirector del Departamento de Mecánica y Mecatrónica

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
