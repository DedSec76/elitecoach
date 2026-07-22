import {Icon} from "../../../shared/ui/Icon"

export const MainWorkspace = () => {
    return (
        <main className="flex-1 h-full overflow-y-auto flex flex-col">
            {/* <!-- Header (Anchor: TopAppBar variant) --> */}
            <header className="h-24 px-margin-x flex items-center justify-between border-b border-white/5 bg-background/50 backdrop-blur-xl sticky top-0 z-40">
                <div className="flex flex-col">
                    <h2 className="font-headline-md text-headline-md font-bold tracking-tight">Student Management</h2>
                    <div className="flex items-center gap-stack-sm text-on-surface-variant">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="font-label-bold text-[12px] uppercase tracking-widest">24 Active Athletes</span>
                    </div>
                </div>
                
                <div className="flex items-center gap-stack-lg">
                    <div className="relative hidden lg:block">
                        
                        <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm"/>
                        
                        <input className="bg-surface-container-low border border-white/10 px-10 py-2 w-64 text-sm focus:border-primary focus:ring-0 transition-all outline-none" placeholder="Find student..." type="text"/>
                    </div>

                    <button className="bg-primary text-background px-stack-lg py-3 font-label-bold text-label-bold hover:bg-primary/90 transition-transform active:scale-95 flex items-center gap-2">
                        <Icon name="add" className="text-sm"/>
                        
                        ADD NEW STUDENT
                    </button>
                </div>
            </header>

            {/* <!-- Dashboard Content --> */}
            <section className="p-margin-x py-stack-lg">
                <div className="bento-grid">

                    {/* <!-- Left Column: Student List Table --> */}
                    <div className="col-span-12 xl:col-span-8 flex flex-col gap-stack-lg">
                    
                        {/* <!-- List Filters/Tabs --> */}
                        <div className="flex border-b border-white/5 gap-stack-lg">
                            <button className="pb-stack-md border-b-2 border-primary text-primary font-label-bold text-label-bold">All Members</button>
                            <button className="pb-stack-md border-b-2 border-transparent text-on-surface-variant hover:text-on-surface font-label-bold text-label-bold">Bulking (12)</button>
                            <button className="pb-stack-md border-b-2 border-transparent text-on-surface-variant hover:text-on-surface font-label-bold text-label-bold">Cutting (8)</button>
                            <button className="pb-stack-md border-b-2 border-transparent text-on-surface-variant hover:text-on-surface font-label-bold text-label-bold">Maintenance (4)</button>
                        </div>

                        {/* <!-- Table --> */}
                        <div className="titan-card">
                            <table className="w-full text-left">
                                <thead className="bg-surface-container-high/50 text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                                    <tr>
                                    <th className="px-stack-lg py-4 font-bold">Athlete</th>
                                    <th className="px-stack-lg py-4 font-bold">Goal</th>
                                    <th className="px-stack-lg py-4 font-bold">Progress</th>
                                    <th className="px-stack-lg py-4 font-bold text-right">Actions</th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-white/5">

                                    {/* <!-- Student 1 --> */}
                                    <tr className="hover:bg-white/5 transition-colors group cursor-pointer" onclick="selectStudent('Alex Chen')">
                                    <td className="px-stack-lg py-stack-lg">
                                    <div className="flex items-center gap-stack-md">
                                    <div className="w-12 h-12 bg-surface-container-highest shrink-0 relative overflow-hidden">
                                    <img className="object-cover w-full h-full" data-alt="Close up cinematic portrait of an athletic man in a dark gym environment, high contrast professional photography, fitness branding style, deep shadows and green accent lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEwOxZrptxLWRVlzIampWXhK_G5ntK4Szv_IljGIuIoVJJwA99N6kvzm4AM9awusluEeMu6zsTy1zHVSCfaAPJazi_j09UeL68tI8qUNW0HxnKxy8gEXvZJHT6UICHHhnO9oaVEsSd9i7rFisY3R5hRIuGcBL-Cj86yWYN5llXC2zHye5EuzLNy0uEeyQ9gOMrh2D8FZ8chN0V2brCjyfzqQQHMIl40MEBnXpaxiG0_IvJTlgWRbhD"/>
                                    </div>
                                    <div>
                                    <p className="font-bold text-on-surface">Alex Chen</p>
                                    <p className="text-[12px] text-on-surface-variant">Member since Jan 2024</p>
                                    </div>
                                    </div>
                                    </td>
                                    <td className="px-stack-lg py-stack-lg">
                                    <span className="px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-tighter">Bulking</span>
                                    </td>
                                    <td className="px-stack-lg py-stack-lg">
                                    <div className="w-48">
                                    <div className="flex justify-between items-center mb-2">
                                    <span className="text-[11px] text-on-surface-variant">Week 8/12</span>
                                    <span className="text-[11px] text-primary font-bold">66%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-surface-container-highest">
                                    <div className="h-full bg-primary w-[66%]"></div>
                                    </div>
                                    </div>
                                    </td>
                                    <td className="px-stack-lg py-stack-lg text-right">
                                    <div className="flex justify-end gap-stack-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-background transition-colors border border-white/10" title="Edit">
                                    <Icon name="edit" className="text-sm"/>
                                    </button>
                                    <button className="w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-background transition-colors border border-white/10" title="View Profile">
                                    
                                    <Icon name="visibility" className="text-sm"/>
                                    </button>
                                    <button className="w-8 h-8 flex items-center justify-center hover:bg-error hover:text-background transition-colors border border-white/10" title="Delete">
                                    <Icon name="delete" className="text-sm"/>
                                    
                                    </button>
                                    </div>
                                    </td>
                                    </tr>

                                    {/* <!-- Student 2 --> */}
                                    <tr className="hover:bg-white/5 transition-colors group cursor-pointer" onclick="selectStudent('Sarah Jenkins')">
                                    <td className="px-stack-lg py-stack-lg">
                                    <div className="flex items-center gap-stack-md">
                                    <div className="w-12 h-12 bg-surface-container-highest shrink-0 relative overflow-hidden">
                                    <img className="object-cover w-full h-full" data-alt="Medium shot of a focused athletic woman in athletic wear, standing in a modern high-end gym, moody cinematic lighting with neon green accents, sharp professional photography, intense focus." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCenWwcXOudBR9GKUtmijaUbshPu_ob_cJ6nn3kyFjAI5M4Zpjd5GLnRHW6R-LqTw_SzehVcz6omI7FteiRFk-NmRFdYpkoY3MXdy1gaF8r1tes9efrpEReUKtfXPTEwC9V6NRmxGpifvXGWk0Sa4vi9YNX6JQ5KKuI6jXfCamKokj6ZpGWfa6Jj-23p2IqLHriDB5TLzAkixbZY9jYvCgkX9DpqBXh3f4OSBJzJIAFuQ2FqdLogJJ1"/>
                                    </div>
                                    <div>
                                    <p className="font-bold text-on-surface">Sarah Jenkins</p>
                                    <p className="text-[12px] text-on-surface-variant">Member since Mar 2024</p>
                                    </div>
                                    </div>
                                    </td>
                                    <td className="px-stack-lg py-stack-lg">
                                    <span className="px-3 py-1 bg-white/5 border border-white/20 text-on-surface text-[10px] font-bold uppercase tracking-tighter">Fat Loss</span>
                                    </td>
                                    <td className="px-stack-lg py-stack-lg">
                                    <div className="w-48">
                                    <div className="flex justify-between items-center mb-2">
                                    <span className="text-[11px] text-on-surface-variant">Week 3/10</span>
                                    <span className="text-[11px] text-primary font-bold">30%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-surface-container-highest">
                                    <div className="h-full bg-primary w-[30%]"></div>
                                    </div>
                                    </div>
                                    </td>
                                    <td className="px-stack-lg py-stack-lg text-right">
                                    <div className="flex justify-end gap-stack-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-background transition-colors border border-white/10"><Icon name="edit" className="text-sm"/></button>
                                    <button className="w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-background transition-colors border border-white/10"><Icon name="visibility" className="text-sm"/></button>
                                    <button className="w-8 h-8 flex items-center justify-center hover:bg-error hover:text-background transition-colors border border-white/10"><Icon name="delete" className="text-sm"/></button>
                                    </div>
                                    </td>
                                    </tr>

                                    {/* <!-- Student 3 --> */}
                                    <tr className="hover:bg-white/5 transition-colors group cursor-pointer" onclick="selectStudent('Marcus Thorne')">
                                    <td className="px-stack-lg py-stack-lg">
                                    <div className="flex items-center gap-stack-md">
                                    <div className="w-12 h-12 bg-surface-container-highest shrink-0 relative overflow-hidden">
                                    <img className="object-cover w-full h-full" data-alt="Portrait of a muscular man training in a dark, gritty warehouse gym. Dramatic shadows, sweat, high-performance aesthetic. Professional color grading with a hint of green in the midtones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWZVP5U6VNyRRXklDpa2QoK4Qxb_Gp4HyzyBkCn80NkI7nAXxcYxd2KNUs6OqDTkSW1_uU1i8WABJXkUqFWTowHZFXt1YiH2MCJQHf6cFSUX-PhvtC59v_3jRRXHOpfUBV7Dr7QuPU1DGGt5xsymE5YAb-kNUaBSkRSXBFtYk3Yz6UdJUWqm07Zzq99GEw1bAYHwVJES0IJH1UAj8fU6IcxSg7TYG5eym2Hgz_zjCXaSpIPRHvfJ5j"/>
                                    </div>
                                    <div>
                                    <p className="font-bold text-on-surface">Marcus Thorne</p>
                                    <p className="text-[12px] text-on-surface-variant">Member since Nov 2023</p>
                                    </div>
                                    </div>
                                    </td>
                                    <td className="px-stack-lg py-stack-lg">
                                    <span className="px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-tighter">Bulking</span>
                                    </td>
                                    <td className="px-stack-lg py-stack-lg">
                                    <div className="w-48">
                                    <div className="flex justify-between items-center mb-2">
                                    <span className="text-[11px] text-on-surface-variant">Week 11/12</span>
                                    <span className="text-[11px] text-primary font-bold">92%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-surface-container-highest">
                                    <div className="h-full bg-primary w-[92%]"></div>
                                    </div>
                                    </div>
                                    </td>
                                    <td className="px-stack-lg py-stack-lg text-right">
                                    <div className="flex justify-end gap-stack-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-background transition-colors border border-white/10"><Icon name="edit" className="text-sm"/></button>
                                    <button className="w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-background transition-colors border border-white/10"><Icon name="visibility" className="text-sm"/></button>
                                    <button className="w-8 h-8 flex items-center justify-center hover:bg-error hover:text-background transition-colors border border-white/10"><Icon name="delete" className="text-sm"/></button>
                                    </div>
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* <!-- Right Column: Details & Actions --> */}
                    <div className="col-span-12 xl:col-span-4 flex flex-col gap-stack-lg">
                    
                    {/* <!-- Student Progress Detail Card --> */}
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
                        <h4 className="font-headline-md text-lg font-bold tracking-tight" id="detail-name">Alex Chen</h4>
                        <p className="text-[12px] text-on-surface-variant uppercase tracking-widest">Elite Tier Athlete</p>
                        </div>
                        <div className="grid grid-cols-2 gap-stack-md mb-stack-lg">
                        <div className="p-stack-md bg-background/50 border border-white/5">
                        <p className="text-[10px] text-on-surface-variant uppercase mb-1">Current Weight</p>
                        <p className="text-xl font-bold text-on-surface">88.5 <span className="text-xs font-normal">KG</span></p>
                        </div>
                        <div className="p-stack-md bg-background/50 border border-white/5">
                        <p className="text-[10px] text-on-surface-variant uppercase mb-1">Target Weight</p>
                        <p className="text-xl font-bold text-primary">92.0 <span className="text-xs font-normal">KG</span></p>
                        </div>
                        </div>
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
                        <div className="titan-card p-stack-lg">
                        <h3 className="font-headline-md text-sm font-bold uppercase tracking-widest mb-stack-lg border-l-2 border-primary pl-3">Quick Actions</h3>
                        <div className="flex flex-col gap-stack-sm">
                        <button className="w-full flex items-center justify-between p-stack-md bg-white/5 hover:bg-primary group transition-all text-left">
                        <span className="font-label-bold group-hover:text-background">Assign New Routine</span>
                        <span className="material-symbols-outlined text-on-surface-variant group-hover:text-background" data-icon="playlist_add">playlist_add</span>
                        </button>
                        <button className="w-full flex items-center justify-between p-stack-md bg-white/5 hover:bg-primary group transition-all text-left">
                        <span className="font-label-bold group-hover:text-background">Log Achievement</span>
                        <span className="material-symbols-outlined text-on-surface-variant group-hover:text-background" data-icon="emoji_events">emoji_events</span>
                        </button>
                        <button className="w-full flex items-center justify-between p-stack-md bg-white/5 hover:bg-primary group transition-all text-left">
                        <span className="font-label-bold group-hover:text-background">Schedule Check-in</span>
                        <span className="material-symbols-outlined text-on-surface-variant group-hover:text-background" data-icon="calendar_month">calendar_month</span>
                        </button>
                        <button className="w-full flex items-center justify-between p-stack-md bg-white/5 hover:bg-error group transition-all text-left">
                        <span className="font-label-bold group-hover:text-white">Flag for Review</span>
                        <span className="material-symbols-outlined text-on-surface-variant group-hover:text-white" data-icon="flag">flag</span>
                        </button>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}