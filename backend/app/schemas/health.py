from pydantic import BaseModel


class HealthResponse(BaseModel):
    status: str
    project: str
    tagline: str
    environment: str
    supabase_configured: bool
