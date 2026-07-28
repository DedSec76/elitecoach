import { useState } from "react";

export const LoginForm = ({loading, onSubmit, setEmail, setPassword}) => {

    const [showPassword, setShowPassword] = useState(false);
    

    return (
        <form onSubmit={onSubmit} className="space-y-6">

            {/* <!-- Email Field --> */}
            <div className="space-y-2 group/input">
                <label className="block font-label-bold text-xs text-on-surface-variant uppercase tracking-wider">
                    Registry Email
                </label>
                <div className="relative focus-glow transition-all duration-300">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within/input:text-primary transition-colors">
                        alternate_email
                    </span>
                    <input onChange={e => setEmail(e.target.value)} className="w-full bg-surface-container-lowest border border-outline-variant py-4 pl-12 pr-4 text-on-surface placeholder:text-on-secondary-fixed-variant focus:border-primary focus:ring-0 transition-all outline-none" id="email" name="email" placeholder="name@titanperformance.com" required="" type="email"/>
                </div>
            </div>
                                
            {/* <!-- Password Field --> */}
            <div className="space-y-2 group/input">
                <div className="flex justify-between items-end">
                    <label className="block font-label-bold text-xs text-on-surface-variant uppercase tracking-wider">
                        Security Cipher
                    </label>
                    <a className="text-[11px] font-label-bold text-on-secondary-fixed-variant hover:text-primary transition-colors uppercase" href="#">
                        Forgot password?
                    </a>
                </div>

                <div className="relative focus-glow transition-all duration-300">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within/input:text-primary transition-colors">
                        lock
                    </span>

                    <input onChange={e => setPassword(e.target.value)} className="w-full bg-surface-container-lowest border border-outline-variant py-4 pl-12 pr-12 text-on-surface placeholder:text-on-secondary-fixed-variant focus:border-primary focus:ring-0 transition-all outline-none" id="password" name="password" placeholder="••••••••" required="" type={ showPassword ? "text" : "password"}/>
                                        
                    <button onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface" type="button">
                        <span className="material-symbols-outlined text-[20px]">{showPassword ? "visibility_off" : "visibility" }</span>
                    </button>
                </div>
            </div>

            {/* <!-- Options --> */}
            <div className="flex items-center space-x-3">
                <input className="w-4 h-4 rounded-none bg-surface-container-lowest border-outline-variant text-primary focus:ring-offset-0 focus:ring-0" id="remember" type="checkbox"/>
                <label className="text-sm text-on-surface-variant font-body-md select-none">Maintain persistent connection</label>
            </div>

            {/* <!-- CTA --> */}
            <div className="pt-4">
                <button className="group relative w-full bg-primary py-5 px-6 btn-active-state transition-all duration-300 hover:bg-primary-fixed overflow-hidden" type="submit">
                    <span className="relative z-10 font-label-bold text-on-primary uppercase tracking-[0.2em] flex items-center justify-center">
                        { loading ? "Cargando..." : "ENTER COMMAND CENTER" }
                        <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1">login</span>
                    </span>

                    {/* <!-- Button Hover Effect --> */}
                    <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-white/10 transition-transform duration-300"></div>
                </button>
            </div>
        </form>    
    )                   
}