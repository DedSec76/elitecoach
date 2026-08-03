import { useState } from "react"
import { useFetchData } from "../../students/hooks/useFetchData";
import { getStudents, deleteStudent } from "../../students/services/students.service";
import { Header } from "../components/Header";
import { StudentCard } from "../../students/components/StudentCard";
import { StudentForm } from "../../students/components/StudentForm";
import { StudentProgress } from "../components/StudentProgress";
import { MODES } from "@/shared/constants/crudNames";
import { useMemo } from "react";

export const MainWorkspace = () => {
    // Abrir y cerrar el modal para agregar alumno
    const [isModalOpen, setIsModalOpen] = useState(false)

    const [mode, setMode] = useState(MODES.CREATE)
    
    const [selectedStudentId, setSelectedStudentId] = useState(null)

    const { data: students, loading, error, refetch } = useFetchData(getStudents)

    // Create
    const handleCreate = () => {
        setSelectedStudentId(null);
        setMode(MODES.CREATE);
        setIsModalOpen(true);
    };

    // Read
    const handleView = (student) => {
        setSelectedStudentId(student.id);
    }

    // Update
    const handleEdit = (id) => {
        setSelectedStudentId(id);
        setMode(MODES.EDIT);
        setIsModalOpen(true);
    };

    // Delete
    const handleDelete = async (id) => {
        try{
            await deleteStudent(id);

            if (selectedStudentId === id) {
                setSelectedStudentId(null)
            }

            await refetch();
        }catch(error){
            console.error(error);
        }
    }

    const selectedStudent = useMemo(() => {
        return students?.find(s => s.id === selectedStudentId);
    }, [students, selectedStudentId])

    if(loading) return <p>Espere...</p>

    return (
        <main className="flex-1 h-full flex flex-col overflow-hidden">
            {/* <!-- Header (Anchor: TopAppBar variant) --> */}
            <Header activeAthletes={students?.length} onCreate={handleCreate} />

            {/* <!-- Dashboard Content --> */}
            <section className="flex-1 overflow-y-auto p-margin-x py-stack-lg">

                <div className="bento-grid">
                    {/* <!-- Left Column: Student List Table --> */}
                    <div className="col-span-12 xl:col-span-8 flex flex-col gap-stack-lg">
                    
                        {/* <!-- List Filters/Tabs --> */}
                        <div className="flex border-b border-white/5 gap-stack-lg">
                            <button className="pb-stack-md border-b-2 border-primary text-primary font-label-bold text-label-bold">All Members</button>
                            <button className="pb-stack-md border-b-2 border-transparent text-on-surface-variant hover:text-on-surface font-label-bold text-label-bold">Bulking (12)</button>
                            <button className="pb-stack-md border-b-2 border-transparent text-on-surface-variant hover:text-on-surface font-label-bold text-label-bold">Cutting (8)</button>
                            <button className="pb-stack-md border-b-2 border-transparent text-on-surface-variant hover:text-on-surface font-label-bold text-label-bold">Maintenance (4)</button>
                        </div>

                        {/* <!-- Table --> */}
                        <div className="overflow-x-auto titan-card">
                            <table className="w-full text-left">
                                <thead className="bg-surface-container-high/50 text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                                    <tr>
                                        <th className="px-stack-lg py-4 font-bold">Athlete</th>
                                        <th className="px-stack-lg py-4 font-bold">Goal</th>
                                        <th className="px-stack-lg py-4 font-bold">Progress</th>
                                        <th className="px-stack-lg py-4 font-bold text-right">Actions</th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-white/5">
                                    { error ? <p className="text-2xl text-on-error">{error}</p> 
                                    : students.map(s => (
                                        <StudentCard key={s.id} student={s} onEdit={handleEdit} onDelete={handleDelete} onView={handleView} />
                                    )) }
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* <!-- Right Column: Details & Actions --> */}
                    <div className="col-span-12 xl:col-span-4 flex flex-col gap-stack-lg">
                    
                        {/* <!-- Student Progress Detail Card --> */}
                        <StudentProgress student={selectedStudent} loading={loading} />
                    </div>
                </div>
            </section>

            {/* <!-- Modal Add New Student --> */}
            <StudentForm 
                mode={mode} 
                student={selectedStudent}
                refetch={refetch} 
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
        </main>
    )
}