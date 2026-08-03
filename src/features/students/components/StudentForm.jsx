import { useState } from "react"
import { insertStudent, updateStudent } from "../services/students.service";
import { useEffect } from "react";
import { GOALS } from "@/shared/constants/goals";
import { createProgress } from "@/features/progress/services/progress.service";
import { MODES } from "@/shared/constants/crudNames";
import { buildStudentPayload } from "../utils/studentPayload";

const EMPTY_STUDENT  = {
    full_name: "",
    age: "",
    phone: "",
    current_weight: "",
    height: "",
    current_body_fat: "",
    goal: "",
    goal_weight: "",
    goal_body_fat: "",
}

export const StudentForm = ({mode, student, refetch, isModalOpen, setIsModalOpen}) => {
    const isCreate = mode === MODES.CREATE
    // Objeto para añadir nuevo alumno
    const [formData, setFormData] = useState(student ?? EMPTY_STUDENT );  

    // Envia los datos del nuevo alumno a la db
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            if(mode === MODES.CREATE) {
                const payload = buildStudentPayload(formData)

                const student = await insertStudent(payload)
                
                await createProgress({
                    student_id: student.id,
                    weight: student.current_weight,
                    body_fat: student.current_body_fat,
                })
                
            } else if (mode === MODES.EDIT) {
                await updateStudent(student.id, formData);
            }

            await refetch()
            setIsModalOpen(false)
            setFormData(EMPTY_STUDENT)
            
        } catch (error) {
            console.error(error)
        }
    }

    // Captura los datos de los campos del formulario
    const handleChange = (e) => {
        const {name, value} = e.target 

        setFormData(prev => ({...prev, [name]: value}))
    }

    useEffect(() => {
        setFormData(student ?? EMPTY_STUDENT);
    }, [student, mode])

    return (
        <section className={`${isModalOpen ? "block" : "hidden" } absolute inset-0 bg-on-secondary/60 z-5000`}>
                
            <div className="mx-auto max-w-200 titan-card">
                <h2 className="py-6 md:py-8 text-center text-headline-md md:text-headline-lg uppercase">{ isCreate ? "Add New" : "Update"} <span className="text-primary">Student</span></h2>
                    
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center px-4">
                    <div className="formFieldCard">
                        <legend className="formLegend"><span className="formLegendSpan">01.</span> Personal Details</legend>

                        <div className="grid grid-cols-3 gap-2">
                            <div className="col-span-2 formField">
                                <label>Full Name</label>
                                <input onChange={handleChange} className="p-2 bg-on-background/20 uppercase" name="full_name" type="text" placeholder="Ej. Pedro Paulet" value={formData?.full_name} />
                            </div>

                            <div className="formField">
                                <label>Age</label>
                                <input onChange={handleChange} className="p-2 bg-on-background/20" name="age" type="number" placeholder="Ej. 33" value={formData?.age}/>
                            </div>

                            <div className="col-span-3 formField">
                                <label>Phone</label>
                                <input onChange={handleChange} className="p-2 bg-on-background/20" name="phone" type="text" placeholder="Ej. 999 999 999" value={formData?.phone} />
                            </div>
                        </div>
                    </div>

                    <div className="formFieldCard">
                        <legend className="formLegend"><span className="formLegendSpan">02.</span> Bio-Metrics</legend>

                        <div className="formField">
                            <label>Starting Weight (kg)</label>
                            <input onChange={handleChange} className="p-2 bg-on-background/20" name="current_weight" type="number" placeholder="Ej. 80" value={formData?.current_weight} />
                        </div>

                        <div className="formField">
                            <label>Height</label>
                            <input onChange={handleChange} className="p-2 bg-on-background/20" name="height" type="text" placeholder="Ej. 1.70" value={formData?.height} />
                        </div>

                        <div className="formField">
                            <label>Starting Body Fat (percentage %)</label>
                            <input onChange={handleChange} className="p-2 bg-on-background/20" name="current_body_fat" type="number" placeholder="Ej. 15" value={formData?.current_body_fat} />
                        </div>
                    </div>
                    
                    <div className="formFieldCard">
                        <legend className="formLegend"><span className="formLegendSpan">03.</span> Strategy</legend>
                    
                        <div className="formField">
                            <label htmlFor="goal">Goal</label>
                            <select onChange={handleChange} className="p-2 bg-on-secondary" id="goal" name="goal" value={formData?.goal}>
                                <option value="" disabled>-- Choose your goal --</option>
                                {GOALS.map(g => (
                                    <option key={g.value} value={g.value}>{g.label}</option>
                                ))}
                            </select>
                        </div>

                        <div className="formField">
                            <label>Goal Weight (kg)</label>
                            <input onChange={handleChange} className="p-2 bg-on-background/20" name="goal_weight" type="number" placeholder="Ej. 60" value={formData?.goal_weight} />
                        </div>

                        <div className="formField">
                            <label>Goal Body Fat (Percentage %)</label>
                            <input onChange={handleChange} className="p-2 bg-on-background/20" name="goal_body_fat" type="number" placeholder="Ej. 15" value={formData?.goal_body_fat} />
                        </div>
                    </div>
                    
                    <div className="mb-4 flex gap-10">
                        <button type="button" className="primaryButton bg-on-secondary/90 text-on-background" onClick={() => setIsModalOpen(false)}>Discard</button>
                        <button type="submit" className="primaryButton bg-primary text-background">{ mode === "create" ? "Save" : "Update" } student</button>
                    </div>
                </form>
            </div>
        </section>
    )
}