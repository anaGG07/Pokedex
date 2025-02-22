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
    - [**2️⃣ Configurar el Backend**](#2️⃣-configurar-el-backend)
    - [**3️⃣ Configurar el Frontend**](#3️⃣-configurar-el-frontend)
    - [**Si no se quiere utilizar docker:**](#si-no-se-quiere-utilizar-docker)
    - [**Usando Docker:**](#usando-docker)
  - [🔥 Funcionamiento del Ranking en Tiempo Real](#-funcionamiento-del-ranking-en-tiempo-real)
- [📌 Documentación de la API - Pokédex App](#-documentación-de-la-api---pokédex-app)
  - [📖 Descripción](#-descripción)
  - [🌐 URL Base de la API](#-url-base-de-la-api)
  - [📌 Test](#-test)
    - [🔹 **Ruta para testeo**](#-ruta-para-testeo)
  - [📌 Base de datos](#-base-de-datos)
    - [🔹 **Poblar Base de Datos**](#-poblar-base-de-datos)
  - [📌 Autenticación (Usuarios)](#-autenticación-usuarios)
    - [🔹 **Registro de Usuario**](#-registro-de-usuario)
    - [🔹 **Inicio de Sesión**](#-inicio-de-sesión)
  - [📌 Pokémon](#-pokémon)
    - [🔹 **Obtener todos los Pokémon**](#-obtener-todos-los-pokémon)
    - [🔹 **Obtener un Pokémon por nombre**](#-obtener-un-pokémon-por-nombre)
  - [📌 Favoritos y Ranking en Tiempo Real](#-favoritos-y-ranking-en-tiempo-real)
    - [🔹 **Añadir un Pokémon a Favoritos**](#-añadir-un-pokémon-a-favoritos)
    - [🔹 **Eliminar un Pokémon de Favoritos**](#-eliminar-un-pokémon-de-favoritos)
    - [🔹 **Obtener Favoritos del Usuario**](#-obtener-favoritos-del-usuario)
    - [🔹 **Obtener Ranking de Pokémon más favoritos (en tiempo real)**](#-obtener-ranking-de-pokémon-más-favoritos-en-tiempo-real)
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
 git clone https://github.com/anaGG07/proyecto_pokedex.git
 cd poyecto_pokedex
```

### **2️⃣ Configurar el Backend**

1. Instalar dependencias:
```sh
 cd backend
 npm install
```

2. Configurar variables de entorno (.env en /backend)

Antes de iniciar el backend, es necesario configurar las variables de entorno. Crea un archivo .env dentro de la carpeta /backend y define los valores correspondientes a la configuración de la base de datos, autenticación y la API de Pokémon. Un ejemplo de cómo podría verse:

```
PORT=4000
MONGO_URI=mongodb://localhost:27017/nombre_BD
JWT_SECRET=tu_secreto_seguro_para_jwt
POKEAPI_URL=https://pokeapi.co/api/v2
```

Eeemplaza los valores con tus propias configuraciones antes de ejecutar el servidor.

### **3️⃣ Configurar el Frontend**

1. Instalar dependencias:
```sh
 cd frontend
 npm install
```

2. Configurar variables de entorno (`.env` en `/frontend`):
```sh
 VITE_API_URL=http://localhost:4000/api
```


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


---
 

# 📌 Documentación de la API - Pokédex App

## 📖 Descripción
La API creada en este proyecto permite la gestión de usuarios, autenticación, manejo de Pokémon y el sistema de favoritos con un **ranking en tiempo real** de los Pokémon más populares.

El backend está desarrollado con **Node.js y Express** y utiliza **MongoDB** para almacenar datos.

---

## 🌐 URL Base de la API
```
http://localhost:4000/api
```

---
## 📌 Test

### 🔹 **Ruta para testeo**
**Endpoint:**
```http
GET http://localhost:4000/api/test
```
**Descripción:** Comprueba que la API funciona correctamente.

**Respuesta:**
```json
{
  "message": "API funcionando correctamente",
  "timestamp": "2025-02-15T19:07:04.219Z"
}
```

---


## 📌 Base de datos

### 🔹 **Poblar Base de Datos**
**Endpoint:**
```http
GET http://localhost:4000/api/pokemons/fetch
```
**Descripción:** Realiza un fetch a la PokeApi y almacena el resultado en la base de datos de MongoDB

**Respuesta:**
```json
{
  "message": "Base de datos actualizada sin duplicados"
}
```


---

## 📌 Autenticación (Usuarios)

### 🔹 **Registro de Usuario**
**Endpoint:**
```http
POST http://localhost:4000/api/users/register
```
**Descripción:** Registra un nuevo usuario.

**Cuerpo de la petición:**
```json
{
  "username": "ejemplo",
  "email": "ejemplo@email.com",
  "password": "contraseña123"
}
```

**Respuesta:**
```json
{
  "_id": "65a48f7b34abc123",
  "username": "ejemplo",
  "email": "ejemplo@email.com",
  "token": "jwt_token"
}
```

---

### 🔹 **Inicio de Sesión**
**Endpoint:**
```http 
POST http://localhost:4000/api/users/login
```
**Descripción:** Inicia sesión y devuelve un token JWT.

**Cuerpo de la petición:**
```json
{
  "email": "ejemplo@email.com",
  "password": "contraseña123"
}
```

**Respuesta:**
```json
{
  "_id": "65a48f7b34abc123",
  "username": "ejemplo",
  "email": "ejemplo@email.com",
  "token": "jwt_token"
}
```

---

## 📌 Pokémon

### 🔹 **Obtener todos los Pokémon**
**Endpoint:**
```http
GET http://localhost:4000/api/pokemons
```
**Descripción:** Retorna todos los Pokémon almacenados en la base de datos.

**Respuesta:**
```json
[
  {
    "pokemonId": 25,
    "name": "pikachu",
    "types": ["electric"],
    "img": "url_de_imagen",
    "stats": [{ "base_stat": 55, "stat": "attack" }]
  }
]
```

---

### 🔹 **Obtener un Pokémon por nombre**
**Endpoint:**
```http
GET http://localhost:4000/api/pokemons/{name}
```
**Descripción:** Retorna los datos de un Pokémon específico.

**Ejemplo:**
```http
GET http://localhost:4000/api/pokemons/pikachu
```

**Respuesta:**
```json
{
  "pokemonId": 25,
  "name": "pikachu",
  "types": ["electric"],
  "img": "url_de_imagen",
  "stats": [{ "base_stat": 35, "stat": "hp" }]
}
```

---

## 📌 Favoritos y Ranking en Tiempo Real

### 🔹 **Añadir un Pokémon a Favoritos**
**Endpoint:**
```http
POST http://localhost:4000/api/users/favorite/{name}
```
**Descripción:** Añade un Pokémon a la lista de favoritos del usuario autenticado.

>[!NOTE]
**NECESITA UN TOKEN**

**Encabezados:**
```http
Authorization: Bearer {jwt_token}
```

**Ejemplo:**
```http
POST http://localhost:4000/api/users/favorite/charmander
```

**Respuesta:**
```json
{
  "message": "charmander añadido a tus favoritos",
  "pokemon": {
    "_id": "67b0d510d23ff08c3cd6a286",
    "pokemonId": 4,
    "__v": 0,
    "img":"url_de_imagen",
    "name": "charmander",
    "stats": [
      {
        "stat": {
          "name": "hp"
        },
        "base_stat": 39,
        "_id": "67b0e7232af377fdfe812449"
      },...
    ],
    "types": [
      "fire"
    ]
  }
}
```

---

### 🔹 **Eliminar un Pokémon de Favoritos**
**Endpoint:**
```http
DELETE http://localhost:4000/api/users/favorite/{name}
```
**Descripción:** Elimina un Pokémon de la lista de favoritos del usuario autenticado.

**Ejemplo:**
```http
DELETE http://localhost:4000/api/users/favorite/charmander
```

**Respuesta:**
```json
{
    "message": "charmander eliminado de favoritos"
}
```

---

### 🔹 **Obtener Favoritos del Usuario**
**Endpoint:**
```http
GET http://localhost:4000/api/users/favorites
```
**Descripción:** Devuelve la lista de Pokémon favoritos del usuario autenticado.

>[!NOTE]
**NECESITA UN TOKEN**

**Encabezados:**
```http
Authorization: Bearer {jwt_token}
```

**Ejemplo de respuesta:**
```json
[
  {
    "_id": "67b0d510d23ff08c3cd6a284",
    "pokemonId": 2,
    "__v": 0,
    "img": "url_de_imagen",
    "name": "ivysaur",
    "stats": [
      {
        "stat": {
          "name": "hp"
        },
        "base_stat": 60,
        "_id": "67b0e7232af377fdfe81243d"
      },...
    ],
    "types": [
      "grass",
      "poison"
    ]
  },...
]
```

---

### 🔹 **Obtener Ranking de Pokémon más favoritos (en tiempo real)**
**Endpoint:**
```http
GET http://localhost:4000/api/users/favorites/ranking
```
**Descripción:** Retorna los Pokémon más agregados a favoritos por todos los usuarios **en tiempo real**.

**Ejemplo de respuesta:**
```json
[
  {
    "_id": "67b0d510d23ff08c3cd6a29b",
    "pokemonId": 25,
    "img":"url_de_imagen",
    "name": "pikachu",
    "favoriteCount": 1 // <--- Usuarios que han añadido este pokemon a fav.
  }
]
```

📌 **Cuando un usuario añade un Pokémon a favoritos, el ranking se actualiza automáticamente para todos los usuarios en tiempo real.** Esto se logra mediante:
1. **MongoDB Aggregation** → Cuenta cuántos usuarios han agregado cada Pokémon.
2. **Context API (`RankingContext`)** → Gestiona la actualización del ranking en React.
3. **Actualización Automática** → Cada vez que un usuario agrega o elimina un favorito, la lista se actualiza globalmente.

---

## 🛠 Autor y Créditos
📌 **Desarrollado por:** Ana María García.

📌 **Datos obtenidos desde:** [PokeAPI](https://pokeapi.co/).



