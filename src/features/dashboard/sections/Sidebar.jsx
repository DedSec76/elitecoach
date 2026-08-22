import { BrandHeader } from "@/shared/components/BrandHeader"
import {Icon} from "../../../shared/ui/Icon"
import { useAuth } from "@/features/auth/hooks/useAuth"
import { Link } from "react-router-dom"

const items_navbar = [
    {route: "/dashboard", icon: "group", title: "students"},
    {route: "./routines", icon: "fitness_center", title: "routines"},
    {route: "./analytics", icon: "leaderboard", title: "analytics"},
    {route: "./settings", icon: "settings", title: "settings"},
]
export const Sidebar = ({ toggle}) => {
    const { signOut } = useAuth()
    const isActive = false

    return (
        <aside className={`${toggle ? "flex" : "hidden"} w-full md:w-70 h-screen bg-surface-container-lowest border-r border-white/5 md:flex flex-col shrink-0`}>
            <div className="p-stack-lg">
                <BrandHeader />
            </div>

            <nav className="flex-1 px-stack-md space-y-2 mt-stack-lg">
                { items_navbar ? (
                    items_navbar.map(item => (
                        <Link key={item.title} className={`${isActive ? "bg-primary-container/10 text-primary" : "text-on-surface-variant hover:text-primary"} flex items-center gap-stack-md p-stack-md transition-all group`}
                            to={item.route}>
                            <Icon name={item.icon}/>
                            <span className="font-label-bold text-label-bold capitalize">{item.title}</span>
                        </Link>
                    ))
                ) :  <p>An error occurred</p>}
            </nav>
            
            <div className="h-34 md:h-section-gap p-stack-lg border-t border-white/5">
                <div className="flex items-center justify-between gap-stack-md">
                    <div className="w-10 h-10 bg-primary/20 flex items-center justify-center border border-primary/30">
                        <Icon name="person"/>
                    </div>

                    <div>
                        <p className="font-label-bold text-label-bold">Coach Marcus</p>
                        <p className="text-[10px] text-on-surface-variant">ELITE LEVEL</p>
                    </div>

                    <button onClick={signOut} className="flex items-center gap-2 text-sm">
                        <Icon name="logout" />
                        Logout
                    </button>
                </div>
            </div>
        </aside>
    )
}