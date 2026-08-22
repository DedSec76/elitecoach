import { formatDate } from "@/shared/utils/formatDate"
import { ActionButton } from "../../dashboard/components/ActionButton"
import { GOALS } from "@/shared/constants/goals";
import { calculateProgress } from "../utils/calculateProgress";
import { calculateMaintenanceDifference } from "../utils/calculateMaintenanceDifference";
import { ProgressBar } from "@/features/progress/components/ProgressBar";
import { current_week } from "@/features/progress/utils/progressCurrentWeek";
import { MaintenanceCard } from "@/features/progress/components/MaintenanceCard";

const MAINTAIN = 3;
export const StudentTableRow = ({ student, onEdit, onDelete, onView }) => {
    const {id, full_name, goal, initial_weight:initial, current_weight:current, goal_duration_weeks, created_at} = student;

    const goalFind = GOALS.find(g => g.value === goal)?.label ?? "Unfocused"

    const progressBar = calculateProgress(student);
    const weightDifference = calculateMaintenanceDifference(student);

    const currentWeek = current_week(student.created_at);

    return (
        <> 
            <tr className="hover:bg-white/5 transition-colors group cursor-pointer" onClick={() => onView(student)}>
                {/* Athlete */}
                <td className="px-stack-sm lg:px-stack-lg py-stack-lg">
                    <div className="flex items-center gap-stack-md">
                        <div className="w-12 h-12 bg-surface-container-highest shrink-0 relative overflow-hidden">
                            <img className="object-cover w-full h-full" data-alt="Close up cinematic portrait of an athletic man in a dark gym environment, high contrast professional photography, fitness branding style, deep shadows and green accent lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEwOxZrptxLWRVlzIampWXhK_G5ntK4Szv_IljGIuIoVJJwA99N6kvzm4AM9awusluEeMu6zsTy1zHVSCfaAPJazi_j09UeL68tI8qUNW0HxnKxy8gEXvZJHT6UICHHhnO9oaVEsSd9i7rFisY3R5hRIuGcBL-Cj86yWYN5llXC2zHye5EuzLNy0uEeyQ9gOMrh2D8FZ8chN0V2brCjyfzqQQHMIl40MEBnXpaxiG0_IvJTlgWRbhD"/>
                        </div>
                        <div>
                            <p className="capitalize font-bold text-on-surface">{full_name}</p>
                            <p className="text-[10px] md:text-[12px] text-on-surface-variant">Member since {formatDate(created_at)}</p>
                        </div>
                    </div>
                </td>

                {/* Goal */}
                <td className="px-stack-sm lg:px-stack-lg py-stack-lg">
                    <span className="px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-tighter">{goalFind}</span>
                </td>

                {/* Progress */}
                <td className="px-stack-sm lg:px-stack-lg py-stack-lg">
                    <div className="w-32 lg:w-48">
                    { goal === MAINTAIN
                    ?
                        <MaintenanceCard difference={weightDifference} initial={initial} current={current} />
                    :   
                        <ProgressBar currentWeek={currentWeek} goal_duration_weeks={goal_duration_weeks} progressBar={progressBar}  />
                    }
                    </div>
                </td>
                
                {/* Action Buttons */}
                <td className="px-stack-md lg:px-stack-lg py-stack-lg text-right">
                    <div className="flex justify-end gap-stack-md md:gap-stack-sm lg:opacity-0 md:group-hover:opacity-100 transition-opacity">
                        <ActionButton title={"Edit"} type={"edit"} onClick={() => onEdit(student.id)}/>

                        <ActionButton title={"View Profile"} type={"visibility"} onClick={() => onView(student)} />

                        <ActionButton title={"Delete"} type={"delete"} onClick={() => onDelete(id)}/>
                    </div>
                </td>
            </tr>
        </>                                  
    )
} 