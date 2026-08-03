import { Icon } from "../../../shared/ui/Icon"

export const Header = ({activeAthletes, onCreate }) => {

    return (
            <header className="min-h-28 px-margin-x flex gap-2 items-center justify-between border-b border-white/5 bg-background/50 backdrop-blur-xl sticky top-0 z-40">
                <div className="flex flex-col">
                    <h2 className="font-headline-md text-headline-md font-bold tracking-tight">Student Management</h2>
                    
                    <div className="flex items-center gap-stack-sm text-on-surface-variant">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="font-label-bold text-[12px] uppercase tracking-widest">{activeAthletes} Active Athletes</span>
                    </div>
                </div>
                
                <div className="flex items-center gap-stack-lg">
                    <div className="relative hidden lg:block">
                        <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm"/>
                        <input className="bg-surface-container-low border border-white/10 px-10 py-2 w-64 text-sm focus:border-primary focus:ring-0 transition-all outline-none" placeholder="Find student..." type="text"/>
                    </div>

                    <button onClick={onCreate} 
                            className="primaryButton bg-primary text-background">
                        <Icon name="add" color="text-background" className="text-sm"/>
                        ADD NEW STUDENT
                    </button>
                </div>
            </header>
            
    )
}