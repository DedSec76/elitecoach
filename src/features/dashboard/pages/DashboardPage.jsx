import { CopyFooter } from "../../../shared/components/CopyFooter";
import { MainWorkspace } from "../sections/MainWorkspace";
import { Sidebar } from "../sections/Sidebar";

export const DashboardPage = () => {  
    return (    
        <>      
            <div className="flex h-screen w-full">
                <Sidebar />

                <MainWorkspace />
            </div>

            <CopyFooter className="fixed bottom-0 left-64 right-0 z-50" />
        </> 
    );
};