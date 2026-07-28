import { BrandHeader } from "@/shared/components/BrandHeader"
import {Icon} from "../../../shared/ui/Icon"
import { useAuth } from "@/features/auth/hooks/useAuth"

export const Sidebar = () => {
    const { signOut } = useAuth()

    return (
        <aside className="w-64 h-full bg-surface-container-lowest border-r border-white/5 flex flex-col shrink-0">
            <div className="p-stack-lg">
                <BrandHeader />
            </div>

            <nav className="flex-1 px-stack-md space-y-2 mt-stack-lg">
                <a className="flex items-center gap-stack-md p-stack-md bg-primary-container/10 text-primary transition-all group" href="#">
                    <Icon name="group"/>
                    <span className="font-label-bold text-label-bold">Students</span>
                </a>
                <a className="flex items-center gap-stack-md p-stack-md text-on-surface-variant hover:text-primary transition-all group" href="#">
                    <Icon name="fitness_center"/>
                    <span className="font-label-bold text-label-bold">Routines</span>
                </a>
                <a className="flex items-center gap-stack-md p-stack-md text-on-surface-variant hover:text-primary transition-all group" href="#">
                    <Icon name="leaderboard"/>
                    <span className="font-label-bold text-label-bold">Analytics</span>
                </a>
                <a className="flex items-center gap-stack-md p-stack-md text-on-surface-variant hover:text-primary transition-all group" href="#">
                    <Icon name="settings"/>
                    <span className="font-label-bold text-label-bold">Settings</span>
                </a>
            </nav>
            
            <div className="p-stack-lg border-t border-white/5">
                <div className="flex items-center gap-stack-md">
                    <div className="w-10 h-10 bg-primary/20 flex items-center justify-center border border-primary/30">
                        <Icon name="person"/>
                    </div>

                    <div>
                        <p className="font-label-bold text-label-bold">Coach Marcus</p>
                        <p className="text-[10px] text-on-surface-variant">ELITE LEVEL</p>
                    </div>

                    <button onClick={signOut} className="text-sm">
                        <Icon name="logout" />
                        Logout
                    </button>
                </div>
            </div>
        </aside>
    )
}