from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api.v1.router import api_router
from app.api.v1.endpoints.health import router as health_router

app = FastAPI(
    title=settings.PROJECT_NAME,
    description="Backend API for Small Gym Membership & Attendance Portal (Train Better. Track Smarter.)",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# Set up CORS middleware
if settings.BACKEND_CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.BACKEND_CORS_ORIGINS,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

# Include v1 API routes
app.include_router(api_router, prefix=settings.API_V1_STR)

# Direct health endpoint at /api/health as well as /api/v1/health
app.include_router(health_router, prefix="/api", tags=["Health"], include_in_schema=False)


@app.get("/", tags=["Root"])
async def root():
    return {
        "project": settings.PROJECT_NAME,
        "tagline": settings.PROJECT_TAGLINE,
        "message": "GYMPORTAL Backend API is running.",
        "docs": "/docs",
        "health": "/api/health",
        "health_v1": f"{settings.API_V1_STR}/health",
    }
