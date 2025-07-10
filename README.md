# 🐦 Pajarito Social

**⚠️ PROYECTO BÁSICO DE APRENDIZAJE** - Este es un clon muy básico de X (Twitter) creado con fines educativos para aprender desarrollo web full-stack.

## 📋 Descripción

Pajarito Social es una aplicación web simple que replica algunas funcionalidades básicas de X (Twitter) como:
- Registro e inicio de sesión de usuarios
- Creación y visualización de posts
- Interfaz básica similar a X

**Nota importante**: Este proyecto fue desarrollado únicamente con fines educativos para aprender conceptos de desarrollo web. No es una aplicación completa ni está optimizada para producción.

## 🛠️ Tecnologías Utilizadas

### Backend
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web para Node.js
- **MySQL** - Base de datos relacional
- **JWT** - Autenticación con tokens
- **bcrypt** - Encriptación de contraseñas
- **Zod** - Validación de datos
- **CORS** - Configuración de políticas de origen cruzado

### Frontend
- **HTML5** - Estructura de páginas
- **CSS3** - Estilos y diseño responsivo
- **JavaScript (Vanilla)** - Interactividad del lado del cliente

## 📁 Estructura del Proyecto

```
pajarito-social/
├── app.js                 # Punto de entrada de la aplicación
├── controllers/           # Lógica de controladores
│   ├── user.js          # Controlador de usuarios
│   └── post.js          # Controlador de posts
├── models/              # Modelos de datos
│   ├── user.js         # Modelo de usuario
│   └── post.js         # Modelo de post
├── routes/              # Definición de rutas
│   ├── user.js         # Rutas de usuarios
│   ├── post.js         # Rutas de posts
│   └── interns.js      # Rutas internas
├── schemes/             # Validaciones con Zod
│   ├── user.js         # Esquemas de validación de usuario
│   └── post.js         # Esquemas de validación de post
├── utils/               # Utilidades
│   ├── MysqlConnection.js  # Conexión a MySQL
│   └── middlewares.js      # Middlewares personalizados
├── views/               # Archivos del frontend
│   ├── css/            # Estilos CSS
│   ├── js/             # JavaScript del cliente
│   ├── interns/        # Páginas HTML
│   └── public/         # Archivos estáticos
└── test.http           # Archivo de pruebas de API
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 14 o superior)
- MySQL
- pnpm (recomendado) o npm

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd pajarito-social
   ```

2. **Instalar dependencias**
   ```bash
   pnpm install
   ```

3. **Configurar variables de entorno**
   Crear un archivo `.env` en la raíz del proyecto:
   ```env
   PORT=3000
   SECRET=tu_clave_secreta_jwt
   DB_HOST=localhost
   DB_USER=tu_usuario_mysql
   DB_PASSWORD=tu_password_mysql
   DB_NAME=nombre_de_tu_base_de_datos
   ```

4. **Configurar la base de datos**
   - Crear una base de datos MySQL
   - Ejecutar los scripts SQL para crear las tablas necesarias

5. **Ejecutar el proyecto**
   ```bash
   pnpm dev
   ```

## 📊 Base de Datos

### Tablas Requeridas

**Tabla `users`:**
```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Tabla `posts`:**
```sql
CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email_user VARCHAR(100) NOT NULL,
    post TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (email_user) REFERENCES users(email)
);
```

## 🔌 API Endpoints

### Usuarios
- `POST /api/users/register` - Registrar nuevo usuario
- `POST /api/users/login` - Iniciar sesión

### Posts
- `POST /api/posts/create` - Crear nuevo post
- `POST /api/posts/get` - Obtener posts de un usuario

### Páginas Web
- `GET /` - Página de inicio de sesión
- `GET /registro` - Página de registro
- `GET /principal` - Página principal (requiere autenticación)

## 🧪 Pruebas

El archivo `test.http` contiene ejemplos de cómo probar los endpoints de la API. Puedes usar extensiones como "REST Client" en VS Code para ejecutar estas pruebas.

## 🎯 Funcionalidades Implementadas

### ✅ Completadas
- [x] Registro de usuarios
- [x] Inicio de sesión con JWT
- [x] Creación de posts
- [x] Visualización de posts por usuario
- [x] Interfaz básica de usuario
- [x] Validación de datos con Zod
- [x] Encriptación de contraseñas
- [x] Autenticación con cookies

### ❌ No Implementadas (Proyecto Básico)
- [ ] Sistema de likes
- [ ] Comentarios en posts
- [ ] Seguir usuarios
- [ ] Timeline personalizado
- [ ] Búsqueda de usuarios/posts
- [ ] Subida de imágenes
- [ ] Notificaciones
- [ ] Mensajes directos

## 🔒 Seguridad

**⚠️ ADVERTENCIA**: Este es un proyecto de aprendizaje básico. No implementa todas las medidas de seguridad necesarias para una aplicación en producción:

- Las contraseñas se encriptan con bcrypt ✅
- Se usa JWT para autenticación ✅
- Validación básica de datos con Zod ✅
- **Faltan**: Rate limiting, validación más robusta, sanitización de datos, etc.

## 📚 Conceptos Aprendidos

Este proyecto demuestra la implementación de:

- **Arquitectura MVC** (Model-View-Controller)
- **APIs RESTful** con Express.js
- **Autenticación JWT** con cookies
- **Validación de datos** con Zod
- **Encriptación** de contraseñas
- **Conexión a base de datos** MySQL
- **Frontend básico** con HTML/CSS/JS
- **Manejo de rutas** y middlewares

## 🤝 Contribuciones

Este es un proyecto de aprendizaje personal. Si encuentras errores o tienes sugerencias para mejorar el código, las contribuciones son bienvenidas.

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

---

**🎓 Recuerda**: Este proyecto fue creado únicamente con fines educativos para aprender desarrollo web full-stack. No está diseñado para uso en producción. 