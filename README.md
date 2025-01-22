# Next.js OpenAI Fitness Assistant

Este proyecto es una aplicación web moderna construida con Next.js que utiliza la API de OpenAI para proporcionar asistencia personalizada en el ámbito del fitness y el entrenamiento físico.

## Características Principales

- Autenticación de usuarios con JWT
- Integración con OpenAI para generación de respuestas personalizadas
- Sistema de contextos para personalización de entrenamiento
- Gestión de prompts y respuestas
- Base de datos PostgreSQL con Prisma ORM
- Arquitectura limpia y modular

## Arquitectura del Proyecto

El proyecto sigue una arquitectura limpia (Clean Architecture) con la siguiente estructura:

```
src/
├── app/
│   ├── api/              # API routes de Next.js
│   ├── core/            
│   │   ├── application/  # Lógica de aplicación
│   │   │   ├── dto/     # Data Transfer Objects
│   │   │   ├── ports/   # Interfaces
│   │   │   └── state/   # Estado global
│   ├── infrastructure/   # Implementaciones concretas
│   │   └── services/    # Servicios de infraestructura
├── lib/                  # Utilidades y configuraciones
└── ui/                   # Componentes de UI
    ├── molecules/       # Componentes moleculares
    └── organisms/       # Componentes organizacionales
```

## Modelos de Datos

### Principales Entidades:

- **User**: Gestión de usuarios y autenticación
- **Context**: Configuración personalizada de entrenamiento
- **Prompt**: Preguntas o solicitudes del usuario
- **Answer**: Respuestas generadas por OpenAI
- **Entidades de Configuración**:
  - Gender
  - Age_range
  - Day_week
  - Current_level
  - Target

## Tecnologías Utilizadas

- **Frontend**:
  - Next.js 15.1.4
  - React 19.0.0
  - SASS para estilos
  - Zustand para gestión de estado

- **Backend**:
  - Next.js API Routes
  - Prisma ORM
  - PostgreSQL
  - JSON Web Tokens (JWT)

- **Herramientas de Desarrollo**:
  - TypeScript
  - ESLint
  - Prisma CLI
  - ts-node

## Variables de Entorno Requeridas

```env
DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/nextjs_openai
OPENAI_API_KEY=tu_api_key_de_openai
JWT_KEY=tu_clave_secreta_jwt
```

## Cómo Ejecutar el Proyecto

1. **Clonar el repositorio**:
```bash
git clone [URL_DEL_REPOSITORIO]
cd project-next-openai
```

2. **Instalar dependencias**:
```bash
npm install
```

3. **Configurar la base de datos**:
```bash
npx prisma generate
npx prisma db push
npx prisma db seed
```

4. **Iniciar el servidor de desarrollo**:
```bash
npm run dev
```

## Comandos Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm start`: Inicia la aplicación en modo producción
- `npm run lint`: Ejecuta el linter

## Autenticación

El sistema utiliza JWT para la autenticación. El flujo es el siguiente:

1. El usuario se registra o inicia sesión
2. Se genera un token JWT
3. El token debe incluirse en el header `Authorization` como `Bearer [token]`

## Endpoints Principales

- `POST /api/auth/register`: Registro de usuarios
- `POST /api/auth/login`: Inicio de sesión
- `POST /api/context`: Creación de contexto de entrenamiento
- `POST /api/answer`: Generación de respuestas con OpenAI

