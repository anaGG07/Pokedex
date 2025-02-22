# 📌 Pokédex App - Documentación

- [📌 Pokédex App - Documentación](#-pokédex-app---documentación)
  - [📖 Descripción General](#-descripción-general)
  - [🚀 Tecnologías Utilizadas](#-tecnologías-utilizadas)
    - [**Frontend**](#frontend)
    - [**Backend**](#backend)
  - [📌 Funcionalidades Clave](#-funcionalidades-clave)
  - [📌 Estructura del Proyecto](#-estructura-del-proyecto)
  - [📥 Instalación y Configuración](#-instalación-y-configuración)
    - [**1️⃣ Clonar el repositorio**](#1️⃣-clonar-el-repositorio)
    - [**Si no se quiere utilizar docker:**](#si-no-se-quiere-utilizar-docker)
    - [**Usando Docker:**](#usando-docker)
  - [🔥 Funcionamiento del Ranking en Tiempo Real](#-funcionamiento-del-ranking-en-tiempo-real)
  - [⭐ Puntos Destacables del Proyecto](#-puntos-destacables-del-proyecto)
    - [🎮 Gamificación y Experiencia de Usuario](#-gamificación-y-experiencia-de-usuario)
    - [🛠 Innovaciones Técnicas](#-innovaciones-técnicas)
    - [🎨 Diseño y Accesibilidad](#-diseño-y-accesibilidad)
    - [🔐 Seguridad y Rendimiento](#-seguridad-y-rendimiento)
    - [🔄 Integración y Despliegue](#-integración-y-despliegue)
    - [📱 Características Multiplataforma](#-características-multiplataforma)
    - [🌟 Funcionalidades Especiales](#-funcionalidades-especiales)
  - [🛠 Autor y Créditos](#-autor-y-créditos)



## 📖 Descripción General
Esta es una aplicación web que permite a los usuarios **explorar, buscar y guardar Pokémon favoritos**. También muestra un **ranking en tiempo real** con los Pokémon más agregados a favoritos.

La aplicación utiliza **React (Frontend)** y **Node.js con Express (Backend)**, junto con **MongoDB** como base de datos. Se integra con **PokeAPI** para obtener datos de los Pokémon.

---

## 🚀 Tecnologías Utilizadas

### **Frontend**
- ⚛️ **React.js** (con Vite y React Router)
- 🎨 **TailwindCSS** (para los estilos y diseño neumórfico)
- 🔄 **Context API** (para gestión de estado global de favoritos y ranking en tiempo real)
- 🌐 **Fetch API** (para comunicarse con el backend)
- 🔔 **Sonner** (para notificaciones visuales)

### **Backend**
- 🌐 **Node.js con Express** (servidor y API REST)
- 🛢️ **MongoDB con Mongoose** (base de datos para usuarios y Pokémon)
- 🔑 **JWT (JSON Web Token)** (para autenticación de usuarios)
- 🔒 **Middleware de autenticación y protección de rutas**

---

## 📌 Funcionalidades Clave
- 🔍 **Buscar Pokémon** por nombre.
- ⭐ **Añadir Pokémon a favoritos**.
- ❌ **Eliminar Pokémon de favoritos**.
- 📊 **Ranking en tiempo real** de los Pokémon más agregados a favoritos.
- 👤 **Registro e inicio de sesión de usuarios**.
- 🔄 **Actualización automática del ranking en tiempo real**.
- 🖥 **Modo protegido para rutas de usuario autenticado**.

---

## 📌 Estructura del Proyecto
```
📂 pokedex-app
 ├── 📂 backend
 │   ├── 📂 config
 │   ├── 📂 controllers
 │   ├── 📂 models
 │   ├── 📂 routes
 │   ├── 📂 middleware
 │   ├── 📂 utils
 │   ├── app.js
 │   ├── server.js
 │   ├── Dockerfile
 │   ├── .env
 │   └── package.json
 │
 |
 ├── 📂 frontend
 │   ├── 📂 src
 │   │   ├── 📂 components
 │   │   ├── 📂 config
 │   │   ├── 📂 helper
 │   │   ├── 📂 context
 │   │   ├── 📂 pages
 │   │   ├── 📂 routes
 │   │   ├── App.jsx
 │   │   ├── main.jsx
 │   |   ├── Dockerfile
 │   │   ├── .env
 │   │   └── package.json
 |
 |
 ├── docker-compose.yml
 ├── documentacion.md
```
---

## 📥 Instalación y Configuración

### **1️⃣ Clonar el repositorio**
```sh
 git clone https://github.com/anaGG07/Pokedex.git
 cd Pokedex
```


1. Configurar variables de entorno (.env en /backend)

No es necesario configurar las variables de entorno ya que se ha administrado los secretos con gitHub, estableciendo un entorno de pruebas donde se confirma que no existe realmente información sensible.

>[!IMPORTANT]No es necesario hacer NPM install, ya que está configurado Docker para crear todas las dependencias

### **Si no se quiere utilizar docker:**

1. Iniciar el servidor (backend):
```sh
 cd backend
 npm start
```

2. Iniciar el cliente React (frontend):
```sh
 cd frontend
 npm run dev
```

### **Usando Docker:**
```sh
 # En la carpeta raíz ejecutar:
 docker-compose up --build
```


---

## 🔥 Funcionamiento del Ranking en Tiempo Real

Cuando un usuario **añade o elimina** un Pokémon de favoritos, la aplicación **actualiza automáticamente el ranking para todos los usuarios en tiempo real**. Esto se logra mediante:

1. **MongoDB Aggregation** → Calcula cuántos usuarios tienen cada Pokémon en favoritos.
2. **Context API (`RankingContext`)** → Almacena y actualiza el ranking de manera global.
3. **Actualización Automática** → Cada vez que un usuario interactúa con favoritos, el ranking se recalcula y **se refleja inmediatamente** para todos los usuarios.



## ⭐ Puntos Destacables del Proyecto

### 🎮 Gamificación y Experiencia de Usuario
- **Sistema de Ranking en Tiempo Real**: Visualización dinámica de los Pokémon más populares
- **Favoritos Personalizados**: Cada usuario puede crear y gestionar su colección personal
- **Búsqueda Inteligente**: Sistema de búsqueda optimizado por nombre de Pokémon
- **Feedback Interactivo**: Notificaciones visuales para todas las acciones del usuario

### 🛠 Innovaciones Técnicas
- **Arquitectura Moderna**
  - Frontend en React con Vite para mejor rendimiento
  - Backend modular en Node.js/Express
  - Base de datos MongoDB optimizada para consultas frecuentes
  
- **Optimización de Datos**
  - Caché inteligente de datos de la PokeAPI
  - Actualización automática de la base de datos
  - Sincronización en tiempo real de favoritos

### 🎨 Diseño y Accesibilidad
- **UI/UX Neumórfico**
  - Diseño moderno con efectos de profundidad
  - Paleta de colores adaptada para modo oscuro
  - Interfaces adaptativas y responsivas
  
- **Componentes Reutilizables**
  - Sistema de tarjetas para visualización de Pokémon
  - Layouts estructurados para diferentes secciones
  - Componentes de navegación intuitivos

### 🔐 Seguridad y Rendimiento
- **Sistema de Autenticación Robusto**
  - JWT para gestión segura de sesiones
  - Rutas protegidas con middleware personalizado
  - Encriptación de datos sensibles
  
- **Optimización de Recursos**
  - Lazy loading de imágenes
  - Paginación eficiente de resultados
  - Gestión de estados con Context API

### 🔄 Integración y Despliegue
- **Docker Ready**
  - Contenedorización completa de la aplicación
  - Configuración multi-contenedor con docker-compose
  - Volúmenes persistentes para datos

- **CI/CD Preparado**
  - Scripts de construcción optimizados
  - Configuración de desarrollo y producción
  - Gestión de variables de entorno

### 📱 Características Multiplataforma
- **Diseño Responsive**
  - Adaptación fluida a diferentes dispositivos
  - Interfaces optimizadas para móvil
  - Experiencia consistente cross-platform

### 🌟 Funcionalidades Especiales
- **Sincronización con PokeAPI**
  - Actualización automática de la base de datos
  - Caché inteligente de datos externos
  - Sistema de fallback para datos no disponibles

- **Sistema de Rankings**
  - Actualización en tiempo real
  - Métricas de popularidad
  - Visualización dinámica de tendencias




---

## 🛠 Autor y Créditos
📌 **Desarrollado por:** Ana María García.

📌 **Datos obtenidos desde:** [PokeAPI](https://pokeapi.co/).