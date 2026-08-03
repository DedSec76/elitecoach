
export function studentProgressBar(student) {
    const { initial_weight, current_weight, goal_weight } = student

    const total = initial_weight - goal_weight
    const completed = initial_weight - current_weight

    const progressBar = Math.round(
        total <= 0
        ? 0 
        : Math.min(100, Math.max(0, (completed / total) * 100))
    );

    return progressBar
}