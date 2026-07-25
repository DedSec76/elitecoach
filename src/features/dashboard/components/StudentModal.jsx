import { useState } from "react"
import { insertStudent, updateStudent } from "../../students/services/students.service";
import { useEffect } from "react";

const EMPTY_STUDENT  = {
    full_name: "",
    age: "",
    phone: "",
    weight: "",
    height: "",
    goal: "",
}

export const StudentModal = ({mode, student, refetch, isModalOpen, setIsModalOpen}) => {
    const isCreate = mode === "create"
    // Objeto para añadir nuevo alumno
    const [formData, setFormData] = useState(student ?? EMPTY_STUDENT );  

    // Envia los datos del nuevo alumno a la db
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            if(mode === "create") {
                await insertStudent(formData)
            } else if (mode === "edit") {
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
                
            <div className="titan-card">
                <h2 className="py-6 text-center text-headline-md md:text-headline-lg uppercase">{ isCreate ? "Add New" : "Update"} <span className="text-primary">Student</span></h2>
                    
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
                    <div className="min-w-sm md:w-3xl bg-background/90 uppercase md:text-body-md px-5 py-3 flex flex-col gap-2">
                        <label>Full Name</label>
                        <input onChange={handleChange} className="p-2 bg-on-background/20 uppercase" name="full_name" type="text" placeholder="Ej. Pedro Paulet" value={formData?.full_name} />
                    </div>

                    <div className="min-w-sm md:w-3xl bg-background/90 uppercase md:text-body-md px-5 py-3 flex flex-col gap-2">
                        <label>Age</label>
                        <input onChange={handleChange} className="p-2 bg-on-background/20" name="age" type="number" placeholder="Ej. 33" value={formData?.age}/>
                    </div>

                    <div className="min-w-sm md:w-3xl bg-background/90 uppercase md:text-body-md px-5 py-3 flex flex-col gap-2">
                        <label>Phone</label>
                        <input onChange={handleChange} className="p-2 bg-on-background/20" name="phone" type="text" placeholder="Ej. 999 999 999" value={formData?.phone} />
                    </div>

                    <div className="min-w-sm md:w-3xl bg-background/90 uppercase md:text-body-md px-5 py-3 flex flex-col gap-2">
                        <label>Weight</label>
                        <input onChange={handleChange} className="p-2 bg-on-background/20" name="weight" type="number" placeholder="Ej. 80" value={formData?.weight} />
                    </div>

                    <div className="min-w-sm md:w-3xl bg-background/90 uppercase md:text-body-md px-5 py-3 flex flex-col gap-2">
                        <label>Height</label>
                        <input onChange={handleChange} className="p-2 bg-on-background/20" name="height" type="text" placeholder="Ej. 1.70" value={formData?.height} />
                    </div>

                    <div className="min-w-sm md:w-3xl bg-background/90 uppercase md:text-body-md px-5 py-3 flex flex-col gap-2">
                        <label>Goal</label>
                        <select onChange={handleChange} className="p-2 bg-on-background/20" name="goal" value={formData?.goal}>
                            <option defaultValue={"bulking"} disabled>--Selected your Goal--</option>
                            <option value={"bulking"}>Bulking</option>
                            <option value={"fat loss"}>Fat Loss</option>
                            <option value={"maintenance"}>Maintenance</option>
                        </select>
                    </div>

                    <div className="flex gap-10">
                        <button type="button" className="primaryButton text-on-background" onClick={() => setIsModalOpen(false)}>Discard</button>
                        <button type="submit" className="primaryButton bg-primary text-background">{ mode === "create" ? "Save" : "Update" } student</button>
                    </div>
                </form>
            </div>
        </section>
    )
}