import { createContext, useEffect, useState } from "react";
import { signOut, signIn, subscribeToAuthChanges, getSession } from "@/features/auth/services/auth.service"

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadSession = async () => {
            try {
                setLoading(true)
                setError(null)

                const currentUser = await getSession()
                setUser(currentUser?.user)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        loadSession();

        const { data: listener } = subscribeToAuthChanges(
            (event, session) => {
                setUser(session?.user ?? null)
                setError(null)
                setLoading(false)
        })

        return () => listener.subscription.unsubscribe()
        
    }, [])

    const handleSignIn = async (email, password) => {
        try {
            setLoading(true);
            setError(null);

            await signIn(email, password)

        } catch (error) {
            
            const errors = {
                "Invalid login credentials": "Email or password is incorrect.",
                "Email not confirmed": "You must confirm your email.",
            }

            setError(errors[error.message] ?? "An unexpected error occurred")
        
            throw error

        } finally {
            setLoading(false);
        }
    }

    const value = { user, loading, error, setError, signIn: handleSignIn, signOut }

    return (
        <AuthContext.Provider value={ value }>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }