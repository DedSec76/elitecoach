import { QuickActionButton } from "./QuickActionButton"

export const StudentProgress = ({ student: selectedStudent, loading }) => {
    if(!selectedStudent) return

    const { full_name, current_weight, goal_weight, current_body_fat, goal_body_fat } = selectedStudent

    return (
        <>
            <div className="titan-card p-stack-lg relative overflow-hidden" id="student-detail-card">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rotate-45 pointer-events-none"></div>
                    <div className="flex justify-between items-start mb-stack-lg">
                        <h3 className="font-headline-md text-xl font-bold uppercase tracking-tight">Athlete Stats</h3>
                        <button className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined" data-icon="more_vert">more_vert</span></button>
                    </div>

                    <div className="flex flex-col items-center mb-stack-lg">
                        <div className="w-24 h-24 border-2 border-primary p-1 mb-stack-md">
                            <div className="w-full h-full bg-surface-container-highest relative overflow-hidden">
                                <img className="object-cover w-full h-full" data-alt="Portrait of an athlete training in low light, professional fitness photography, monochromatic with neon green accents, high contrast." id="detail-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB67_RVYbO-h9V4ohYlz-RnwUS5VsQQrm-9eOD7UUCPAwfHYBmdahTkGlwFXFX1IjohEfOF5sd8t71wdfxd-Oko2T-A8JPdk5fLwfHQlwcE3OznTzauMw-qU_rgLk9adzXU4KIit7SvVUkgirLsY2ZAiRa1M7GfPUzH5ZMRHNcBC4y2SI1BXC96Aq3KgJ8TEm_1esSt7Q4ZIwLL-8bl5-RP95-Sa7ERGQ6nvh7t7j0eeh3ZAGSCWTVm"/>
                            </div>
                        </div>
                        
                        {/* Personal Information */}
                        {loading ? <p>Cargando datos</p> : ""}
                        <h4 className="capitalize font-headline-md text-lg font-bold tracking-tight" id="detail-name">{full_name}</h4>
                        <p className="text-[12px] text-on-surface-variant uppercase tracking-widest">Elite Tier Athlete</p>
                    </div>
                    
                    {/* Target Weight Section */}
                    <div className="grid grid-cols-2 gap-stack-md mb-stack-lg">
                        <div className="p-stack-md bg-background/50 border border-white/5">
                            <p className="text-[10px] text-on-surface-variant uppercase mb-1">Current Weight</p>
                            <p className="text-xl font-bold text-on-surface">{current_weight.toFixed(2)} <span className="text-xs font-normal">KG</span></p>
                        </div>
                        <div className="p-stack-md bg-background/50 border border-white/5">
                            <p className="text-[10px] text-on-surface-variant uppercase mb-1">Target Weight</p>
                            <p className="text-xl font-bold text-primary">{goal_weight.toFixed(2)} <span className="text-xs font-normal">KG</span></p>
                        </div>
                    </div>

                    {/* Target Body-fat Section */}
                    <div className="grid grid-cols-2 gap-stack-md mb-stack-lg">
                        <div className="p-stack-md bg-background/50 border border-white/5">
                            <p className="text-[10px] text-on-surface-variant uppercase mb-1">Current Body Fat</p>
                            <p className="text-xl font-bold text-on-surface">{current_body_fat} <span className="text-xs font-normal">%</span></p>
                        </div>
                        <div className="p-stack-md bg-background/50 border border-white/5">
                            <p className="text-[10px] text-on-surface-variant uppercase mb-1">Target Body Fat</p>
                            <p className="text-xl font-bold text-primary">{goal_body_fat} <span className="text-xs font-normal">%</span></p>
                        </div>
                    </div>

                    {/* Recent Personal Record Section */}
                    <div className="mb-stack-lg">
                        <p className="text-[10px] text-on-surface-variant uppercase mb-stack-md font-bold tracking-widest">Recent PRs</p>
                        <div className="space-y-stack-sm">
                            <div className="flex justify-between items-center p-3 bg-white/5 border-l-2 border-primary">
                                <span className="text-sm font-label-bold">Deadlift</span>
                                <span className="text-sm font-bold text-primary">225 KG</span>
                            </div>

                            <div className="flex justify-between items-center p-3 bg-white/5 border-l-2 border-primary">
                                <span className="text-sm font-label-bold">Squat</span>
                                <span className="text-sm font-bold text-primary">180 KG</span>
                            </div>
                        </div>
                    </div>
                        
                    {/* Current Routine Section */}
                    <div>
                        <p className="text-[10px] text-on-surface-variant uppercase mb-stack-md font-bold tracking-widest">Current Routine</p>
                        <div className="p-stack-md bg-surface-container-low border border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-stack-md">
                                <span className="material-symbols-outlined text-primary" data-icon="description">description</span>
                                <div>
                                    <p className="text-sm font-bold">Hypertrophy PPL v2</p>
                                    <p className="text-[11px] text-on-surface-variant">Ends in 4 weeks</p>
                                </div>
                            </div>
                            <button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span></button>
                        </div>
                    </div>
            </div>

            {/* <!-- Quick Actions --> */}
            <div className="titan-card p-stack-lg mb-10">
                <h3 className="font-headline-md text-sm font-bold uppercase tracking-widest mb-stack-lg border-l-2 border-primary pl-3">Quick Actions</h3>
                    <div className="flex flex-col gap-stack-sm">
                        <QuickActionButton name_action={"Assign New Routine"} name_icon="playlist_add" />

                        <QuickActionButton name_action={"Log Progress"} name_icon="arrow_upload_progress" />
                        
                        <QuickActionButton name_action={"Log Achievement"} name_icon="emoji_events" />

                        <QuickActionButton name_action={"Flag for Review"} name_icon="flag" />
                    </div>
            </div>
        </>
    )
}