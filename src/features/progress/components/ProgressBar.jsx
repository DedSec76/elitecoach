
export const ProgressBar = ({currentWeek, goal_duration_weeks, progressBar}) => {
    return (
        <>
            <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] text-on-surface-variant">Week {currentWeek}/{goal_duration_weeks}</span>
                <span className="text-[11px] text-primary font-bold">{progressBar}%</span>
            </div>
            <div className="h-1.5 w-full bg-surface-container-highest">
                <div className="h-full bg-primary" style={{width: `${progressBar}%`}}></div>
            </div>
        </>      
    )
}