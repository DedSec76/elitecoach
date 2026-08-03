
export function calculateMaintenanceDifference(student) {
    return Math.abs(student.current_weight - student.initial_weight);
}