
export function current_week(startDate) {
    const start = new Date(startDate)
    const today = new Date()
    
    const diffMs = today - start
    const diffDays = diffMs / (1000 * 60 * 60 * 24);
    
    const currentWeek = Math.floor(diffDays / 7) + 1
    
    return currentWeek
}