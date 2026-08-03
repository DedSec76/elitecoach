
export function calculateProgress(student) {
    let total;
    let completed;

    switch(student.goal) {
        case 1:
            total = student.initial_weight - student.goal_weight
            completed = student.initial_weight - student.current_weight
            break;

        case 2:
            total = student.goal_weight - student.initial_weight
            completed = student.current_weight - student.initial_weight
            break;

        default: 
            return null;
    }

    if(total <= 0) return 0

    return Math.round(
        Math.min(100, Math.max(0, (completed / total) * 100))
    );
}