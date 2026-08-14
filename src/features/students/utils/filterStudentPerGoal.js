export function filterStudentPerGoal(search, goalFilter, students) {
    let filteredStudents = students 

    if (goalFilter !== "all") {
        filteredStudents = filteredStudents?.filter(student => student.goal === Number(goalFilter));
    }

    if(search) {
        filteredStudents = filteredStudents.filter(s => s.full_name.toLowerCase().includes(search.toLowerCase()))
    }
    
    return filteredStudents
}