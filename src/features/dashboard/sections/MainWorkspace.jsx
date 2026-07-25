import { useState } from "react"
import { useFetchData } from "../../students/hooks/useFetchData";
import { getStudents, deleteStudent } from "../../students/services/students.service";
import { Header } from "../components/Header";
import { StudentCard } from "../components/StudentCard";
import { StudentModal } from "../components/StudentModal";
import { StudentProgress } from "../components/StudentProgress";

export const MainWorkspace = () => {
    const MODES = {
        CREATE: "create",
        EDIT: "edit",
        DELETE: "delete"
    };
    // Abrir y cerrar el modal para agregar alumno
    const [isModalOpen, setIsModalOpen] = useState(false)

    const [mode, setMode] = useState(MODES.CREATE)
    
    const [selectedStudent, setSelectedStudent] = useState(null)

    const { data: students, loading, error, refetch } = useFetchData(getStudents)
    
    // Add
    const handleCreate = () => {
        setSelectedStudent(null);
        setMode("create");
        setIsModalOpen(true);
    };

    // Edit
    const handleEdit = (student) => {
        setSelectedStudent(student);
        setMode("edit");
        setIsModalOpen(true);
    };

    // Delete
    const handleDelete = async (id) => {
        try{
            await deleteStudent(id);

            await refetch();
        }catch(error){
            console.error(error);
        }
    }

    // Show Profile
    const handleView = (student)=>{
        setSelectedStudent(student);
    }

    if(loading) return <p>Espere...</p>

    return (
        <main className="flex-1 h-full overflow-y-auto flex flex-col">
            {/* <!-- Header (Anchor: TopAppBar variant) --> */}
            <Header onCreate={handleCreate} />

            {/* <!-- Dashboard Content --> */}
            <section className="p-margin-x py-stack-lg">

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
                        <div className="titan-card">
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
                        <StudentProgress loading={loading} student={selectedStudent} />
                    </div>
                </div>
            </section>

            {/* <!-- Modal Add New Student --> */}
            <StudentModal 
                mode={mode} 
                student={selectedStudent}
                refetch={refetch} 
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
        </main>
    )
}