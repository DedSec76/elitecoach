import { useToggle } from "@/shared/hooks/useToggle";
import { CopyFooter } from "../../../shared/components/CopyFooter";
import { MainWorkspace } from "../sections/MainWorkspace";
import { Sidebar } from "../sections/Sidebar";
import { HamburgerBtn } from "@/shared/ui/HamburgerBtn"

export const DashboardPage = () => { 
    const { toggle, onToggle } = useToggle()
    
    return (    
        <>      
            <HamburgerBtn toggle={toggle} handleClick={onToggle} className="rounded-full bg-background/60 fixed top-31 px-2 left-2 z-5000" />

            <div className="flex h-screen w-full overflow-hidden">
                <Sidebar toggle={toggle} />

                <MainWorkspace />
            </div>

            <CopyFooter className="px-4 fixed bottom-0 md:left-64 right-0 z-50" />
        </> 
    );
};