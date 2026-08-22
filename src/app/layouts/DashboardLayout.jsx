import { Outlet } from "react-router-dom";
import { Sidebar } from "@/features/dashboard/sections/Sidebar";
import { HamburgerBtn } from "@/shared/ui/HamburgerBtn";
import { useToggle } from "@/shared/hooks/useToggle";
import { CopyFooter } from "@/shared/components/CopyFooter";

export function DashboardLayout() {
    const { toggle, onToggle } = useToggle()
    
    return (    
        <>      
            <HamburgerBtn toggle={toggle} handleClick={onToggle} className="rounded-full bg-background/60 fixed top-31 px-2 left-2 z-5000" />

            <div className="flex h-screen w-full overflow-hidden">
                <Sidebar toggle={toggle} />

                <Outlet />
            </div>

            <CopyFooter className="px-4 fixed bottom-0 md:left-64 right-0 z-50" />
        </> 
    )
}