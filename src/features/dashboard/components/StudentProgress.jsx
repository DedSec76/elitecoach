import { useToggle } from "@/shared/hooks/useToggle"
import { QuickActionButton } from "./QuickActionButton"
import { ProgressForm } from "@/features/progress/components/ProgressForm";
import { AchievementForm } from "@/features/achievement/components/AchievementForm";
import { useState } from "react";
import { RoutineForm } from "@/features/routines/components/RoutineForm";
import { useQuery } from "@tanstack/react-query";
import { getAchievementPerStudent } from "@/features/achievement/services/achievement.service";
import { StudentOverview } from "@/features/students/components/StudentOverview";

const quickActions = [
    {dataset: "addRoutine", title_action: "Assign New Routine", name_icon: "playlist_add", component: RoutineForm},
    {dataset: "addProgress", title_action: "Log Progress", name_icon: "arrow_upload_progress", component: ProgressForm},
    {dataset: "addAchievement", title_action: "Log Achievement", name_icon: "emoji_events", component: AchievementForm},
    {dataset: "flagReview", title_action: "Flag for Review", name_icon: "flag", bg: "error"}
]
export const StudentProgress = ({ refetch, student }) => {
    const { data: achievement } = useQuery({queryKey: ["achievement", student?.id], queryFn: () => getAchievementPerStudent(student?.id), enabled: !!student?.id})
    const [quickAction, setQuickAction] = useState(null);
    const { toggle, open, close } = useToggle();
    
    if(!student) return null;
    
    const handleClick = ({ currentTarget }) => {
        const btnName = currentTarget.dataset.action
        open()
        setQuickAction(btnName)
    }

    const selectedAction = quickActions.find(q => q.dataset === quickAction);
    const ActionComponent = selectedAction?.component

    return (
        <>
            {/* <!-- Athlete Stats --> */}
            <div className="titan-card p-stack-lg relative overflow-hidden" id="student-detail-card">
                <StudentOverview student={student} achievement={achievement} />
            </div>

            {/* <!-- Quick Actions --> */}
            <div className="titan-card p-stack-lg mb-10">
                <h3 className="font-headline-md text-sm font-bold uppercase tracking-widest mb-stack-lg border-l-2 border-primary pl-3">Quick Actions</h3>
                <div className="flex flex-col gap-stack-sm">
                    { quickActions 
                    ? quickActions.map(action => (
                        <QuickActionButton key={action.dataset} handleClick={handleClick} dataset={action.dataset} name_action={action.title_action} name_icon={action.name_icon} bg={action.bg} />
                    ))
                    : <p>Ocurrió algo inesperado</p> }
                </div>
            </div>

            { ActionComponent && <ActionComponent id={student.id} refetch={refetch} toggle={toggle} close={close} /> }
        </>
    )
}