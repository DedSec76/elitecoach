export function calculateStudentsPerGoal(students) {
    const quantityStudents = students?.reduce((acc, student) => {
        acc[student.goal] = (acc[student.goal] || 0) + 1
        return acc
    }, {})

    return quantityStudents
} 