import { BrandHeader } from "@/shared/components/BrandHeader"
import { CopyFooter } from "@/shared/components/CopyFooter"
import { Icon } from "@/shared/ui/Icon"
import { useState } from "react"
import { LoginForm } from "../sections/LoginForm"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const { signIn, error, loading } = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()

        try {

            await signIn(email, password)
            navigate("/dashboard")

        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <div className="scanline"></div>
            <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-margin-x py-stack-lg">
                <BrandHeader />

                {/* Central Login Card */}
                <section className="w-full max-w-md animate-slide-up">
                    <div className="bg-surface-container-low border border-outline-variant p-8 md:p-10 relative overflow-hidden group login-glow">
                        <div className="absolute w-2 h-2 border-t border-l border-primary top-0 left-0"></div>
                        <div className="absolute w-2 h-2 border-t border-r border-primary top-0 right-0"></div>
                        <div className="absolute w-2 h-2 border-b border-l border-primary bottom-0 left-0"></div>
                        <div className="absolute w-2 h-2 border-b border-r border-primary bottom-0 right-0"></div>
                    
                        <div className="mb-8">
                            <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight uppercase">Access the system</h2>
                            <div className="h-1 w-12 bg-primary mt-2"></div>
                        </div>
                        
                        { error && <p className="mb-4 text-center text-error-container bg-on-error-container py-1">{error}</p>}

                        <LoginForm loading={loading} onSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword} />
                    </div>

                    {/* Security Badge */}
                    <div className="mt-8 flex items-center justify-center gap-2 opacity-40">
                        <Icon name="verified_user" size="sm" color="text-on-background"/>
                        <span className="text-[10px] font-label-bold uppercase tracking-widest">
                            End-to-End Encryption Active
                        </span>
                    </div>
                </section>

                <CopyFooter />
            </main>
        </>
    )
}