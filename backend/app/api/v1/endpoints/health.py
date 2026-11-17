from fastapi import APIRouter
from app.core.config import settings
from app.db.supabase import get_supabase_client
from app.schemas.health import HealthResponse

router = APIRouter()


@router.get("/health", response_model=HealthResponse, summary="Service Health Check")
async def health_check():
    supabase_client = get_supabase_client()
    return HealthResponse(
        status="healthy",
        project=settings.PROJECT_NAME,
        tagline=settings.PROJECT_TAGLINE,
        environment=settings.ENVIRONMENT,
        supabase_configured=supabase_client is not None
    )
