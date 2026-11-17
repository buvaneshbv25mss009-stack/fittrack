# GYMPORTAL

> **Tagline:** Train Better. Track Smarter.  
> **Project Name:** Small Gym Membership & Attendance Portal  

A modern, fast, and scalable gym management platform engineered for small gym owners and studio operators to effortlessly manage members, membership plans, daily attendance, renewal expiries, and payment records.

---

## 🚀 Technology Stack

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Frontend** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) | Type-safe, component-driven UI architecture |
| **Bundler** | [Vite 8](https://vite.dev/) | Instant Hot Module Replacement (HMR) and optimized builds |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first CSS engine with `@tailwindcss/vite` |
| **Backend** | [FastAPI](https://fastapi.tiangolo.com/) | High-performance Python async REST API framework |
| **Validation** | [Pydantic v2](https://docs.pydantic.dev/) | Strict data schemas, typing, and settings validation |
| **Database** | [Supabase](https://supabase.com/) ([PostgreSQL](https://www.postgresql.org/)) | Cloud-hosted relational database, authentication, and Row-Level Security |

---

## 📁 Project Structure

```text
c:\fittrack\
├── backend/                        # FastAPI Backend Application
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py                 # FastAPI application factory & CORS configuration
│   │   ├── api/                    # API Route controllers
│   │   │   ├── __init__.py
│   │   │   └── v1/
│   │   │       ├── __init__.py
│   │   │       ├── router.py       # Central v1 route aggregator
│   │   │       └── endpoints/
│   │   │           ├── __init__.py
│   │   │           └── health.py   # System health-check endpoint
│   │   ├── core/                   # Application settings & security
│   │   │   ├── __init__.py
│   │   │   └── config.py           # Pydantic Settings & environment loaders
│   │   ├── db/                     # Database & Supabase client integration
│   │   │   ├── __init__.py
│   │   │   └── supabase.py         # Supabase client factory
│   │   ├── models/                 # Domain & database models (Phase 2)
│   │   │   └── __init__.py
│   │   ├── schemas/                # Pydantic validation schemas
│   │   │   ├── __init__.py
│   │   │   └── health.py           # Health response schema
│   │   └── services/               # Core business logic layer (Phase 2)
│   │       └── __init__.py
│   ├── .env.example                # Backend environment configuration template
│   ├── .gitignore                  # Backend-specific ignore rules
│   └── requirements.txt            # Python dependencies
│
├── frontend/                       # React + TypeScript Frontend Application
│   ├── public/                     # Static assets
│   ├── src/
│   │   ├── assets/                 # SVGs and images
│   │   ├── components/             # Reusable UI components
│   │   ├── hooks/                  # Custom React hooks
│   │   ├── pages/                  # Page-level route views
│   │   ├── services/               # API & Supabase client services
│   │   │   └── supabase.ts         # Supabase JS client initializer
│   │   ├── types/                  # Global TypeScript definitions
│   │   │   └── index.ts            # Member, Attendance, Plan, & Payment interfaces
│   │   ├── utils/                  # Formatting & helper utilities
│   │   │   └── formatters.ts       # Date and currency formatters
│   │   ├── App.tsx                 # Root application component
│   │   ├── App.css                 # Component styling
│   │   ├── index.css               # Tailwind CSS entrypoint
│   │   ├── main.tsx                # React DOM mount point
│   │   └── vite-env.d.ts           # Vite client type references
│   ├── .env.example                # Frontend environment configuration template
│   ├── .gitignore                  # Frontend-specific ignore rules
│   ├── index.html                  # HTML entry template
│   ├── package.json                # Frontend package configuration & scripts
│   ├── tsconfig.json               # TypeScript project reference config
│   ├── tsconfig.app.json           # Application TypeScript compiler options
│   ├── tsconfig.node.json          # Node/tooling TypeScript compiler options
│   └── vite.config.ts              # Vite + Tailwind CSS configuration
│
├── .env.example                    # Global environment reference
├── .gitignore                      # Monorepo root gitignore
└── README.md                       # Project documentation
```

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js**: v20+ or v22+ LTS (`node -v`, `npm -v`)
- **Python**: v3.10+ or v3.12+ (`python --version`)
- **Supabase Account**: (Free tier at [supabase.com](https://supabase.com))

---

### 1. Backend Setup (FastAPI)

1. Open a terminal and navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Create and activate a Python virtual environment:
   - **Windows (PowerShell)**:
     ```powershell
     python -m venv .venv
     .\.venv\Scripts\Activate.ps1
     ```
   - **Linux / macOS**:
     ```bash
     python3 -m venv .venv
     source .venv/bin/activate
     ```

3. Install backend dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create your local environment file:
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Update `SUPABASE_URL`, `SUPABASE_KEY`, and `DATABASE_URL` with your Supabase project credentials.

5. Start the FastAPI development server:
   ```bash
   uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
   ```

6. Verify the backend:
   - **API Root**: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)
   - **Interactive Swagger Docs**: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
   - **ReDoc**: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)
   - **Health Check**: [http://127.0.0.1:8000/api/v1/health](http://127.0.0.1:8000/api/v1/health)

---

### 2. Frontend Setup (React + Vite + Tailwind)

1. In a separate terminal, navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create your local environment file:
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Populate `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to match your Supabase instance.

4. Start the frontend development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:
   - [http://localhost:5173/](http://localhost:5173/)

---

## 🔒 Environment Variables Overview

### Backend (`backend/.env`)
| Variable | Description | Default |
| :--- | :--- | :--- |
| `ENVIRONMENT` | Running environment (`development` / `production`) | `development` |
| `DEBUG` | Enable debug logs and error tracebacks | `True` |
| `BACKEND_CORS_ORIGINS` | JSON list of allowed origins | `["http://localhost:5173", "http://127.0.0.1:5173"]` |
| `SUPABASE_URL` | Supabase project URL | *(Required for Supabase features)* |
| `SUPABASE_KEY` | Supabase anon / public API key | *(Required for Supabase features)* |
| `SUPABASE_SERVICE_ROLE_KEY`| Supabase service role key (backend only) | *(Optional, for admin operations)* |
| `DATABASE_URL` | PostgreSQL direct connection string | *(Optional, for direct SQL)* |

### Frontend (`frontend/.env`)
| Variable | Description | Default |
| :--- | :--- | :--- |
| `VITE_API_BASE_URL` | FastAPI backend API endpoint | `http://localhost:8000/api/v1` |
| `VITE_SUPABASE_URL` | Supabase project URL | *(Required)* |
| `VITE_SUPABASE_ANON_KEY` | Supabase public anonymous key | *(Required)* |

---

## 📅 Development Roadmap

- [x] **Phase 1: Project Initialization & Architecture**
  - [x] React + TypeScript + Vite frontend scaffolding
  - [x] Tailwind CSS v4 setup and styling foundation
  - [x] Clean modular directory structure (`components`, `hooks`, `pages`, `services`, `types`, `utils`)
  - [x] FastAPI backend setup with health endpoints and CORS
  - [x] Pydantic configuration & environment loading
  - [x] Supabase integration scaffolding (frontend & backend)
  - [x] Comprehensive documentation and environment templates
- [ ] **Phase 2: Database Schema & Authentication**
  - [ ] Supabase PostgreSQL tables: `members`, `membership_plans`, `attendance`, `payments`
  - [ ] Row-Level Security (RLS) policies
  - [ ] Gym Owner / Staff Authentication
- [ ] **Phase 3: Core Gym Management Modules**
  - [ ] Member directory & profile management
  - [ ] Membership plan creation & billing cycles
  - [ ] Real-time check-in & attendance recording
  - [ ] Automatic expiry calculation & alert dashboard
  - [ ] Payment history & receipt generation
- [ ] **Phase 4: Analytics Dashboard & Reporting**
  - [ ] Active member counts & churn metrics
  - [ ] Revenue tracking & recurring subscription projections
