import { useAuth } from "@/features/auth/hooks/useAuth";
import { Icon } from "@/shared/ui/Icon";
import { Link, Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
    const { user, loading, error }  = useAuth()

    if (loading) return <p>Cargando espere...</p>

    if (error) 
        return (
            <div className="h-screen flex flex-col gap-2 justify-center items-center">
                <Link className="hover:underline flex items-center gap-2" to={"/login"}><Icon name="arrow_back" /> Volver al Login</Link>
                <h2 className="text-primary text-3xl">Error al verificar la sesion</h2>
                <p className="text-lg text-error">{error}</p>
            </div>
        )

    if (!user) {
        return <Navigate to={"/login"} replace />
    }

    return <Outlet />
}