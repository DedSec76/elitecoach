import { formatDate } from "@/shared/utils/formatDate"
import { ActionButton } from "../../dashboard/components/ActionButton"
import { GOALS } from "@/shared/constants/goals";

export const StudentCard = ({student, onEdit, onDelete, onView}) => {
    
    const {id, full_name, goal, created_at} = student;

    const goalFind = GOALS.find(g => g.value === goal)?.label ?? "Unfocused"

    const { initial_weight, current_weight, goal_weight }= student

    const total = initial_weight - goal_weight
    const completed = initial_weight - current_weight

    const progressBar = Math.round(
        total <= 0
        ? 0 
        : Math.min(100, Math.max(0, (completed / total) * 100))
    );

    return (
        <>
            <tr className="snap-start hover:bg-white/5 transition-colors group cursor-pointer" onClick={() => onView(student)}>
                <td className="px-stack-lg py-stack-lg">
                    <div className="flex items-center gap-stack-md">
                        <div className="w-12 h-12 bg-surface-container-highest shrink-0 relative overflow-hidden">
                            <img className="object-cover w-full h-full" data-alt="Close up cinematic portrait of an athletic man in a dark gym environment, high contrast professional photography, fitness branding style, deep shadows and green accent lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEwOxZrptxLWRVlzIampWXhK_G5ntK4Szv_IljGIuIoVJJwA99N6kvzm4AM9awusluEeMu6zsTy1zHVSCfaAPJazi_j09UeL68tI8qUNW0HxnKxy8gEXvZJHT6UICHHhnO9oaVEsSd9i7rFisY3R5hRIuGcBL-Cj86yWYN5llXC2zHye5EuzLNy0uEeyQ9gOMrh2D8FZ8chN0V2brCjyfzqQQHMIl40MEBnXpaxiG0_IvJTlgWRbhD"/>
                        </div>
                        <div>
                            <p className="capitalize font-bold text-on-surface">{full_name}</p>
                            <p className="text-[12px] text-on-surface-variant">Member since {formatDate(created_at)}</p>
                        </div>
                    </div>
                </td>

                {/* Goal */}
                <td className="px-stack-lg py-stack-lg">
                    <span className="px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-tighter">{goalFind}</span>
                </td>

                {/* Progress */}
                <td className="px-stack-lg py-stack-lg">
                    <div className="w-48">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-[11px] text-on-surface-variant">Week 8/12</span>
                            <span className="text-[11px] text-primary font-bold">{progressBar}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-surface-container-highest">
                            <div className="h-full bg-primary" style={{width: `${progressBar}%`}}></div>
                        </div>
                    </div>
                </td>
                
                {/* Action Buttons */}
                <td className="px-stack-lg py-stack-lg text-right">
                    <div className="flex justify-end gap-stack-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <ActionButton  title={"Edit"} type={"edit"} onClick={() => onEdit(student)}/>

                        <ActionButton title={"View Profile"} type={"visibility"} onClick={() => onView(student)} />

                        <ActionButton title={"Delete"} type={"delete"} onClick={() => onDelete(id)}/>
                    </div>
                </td>
            </tr>
        </>                                  
    )
} 