import { getExercises } from "@/shared/services/exercises.service"
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query"
import { useState } from "react";
import { createAchievement } from "../services/achievement.service";

export const AchievementForm = ({ id, toggle, close }) => {
    const { data: exercises, error} = useQuery({queryKey: ["exercises"], queryFn: getExercises});
    const [achievementForm, setAchievementForm] = useState({
        weight: "",
        description: "",
        student_id: id,
        exercise_id: "",
    });

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: createAchievement,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["achievement"]
            })
            close();
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        mutation.mutate(achievementForm)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setAchievementForm(prev => ({...prev, [name]: value}))
    }
    
    return (
        <section className={`${toggle ? "block" : "hidden" } absolute inset-0 bg-on-secondary/60 z-5000`}>
                        
                <div className="mx-auto max-w-200 titan-card">
                    <h2 className="py-6 md:py-8 text-center text-headline-md md:text-headline-lg uppercase">Log <span className="text-primary">Achievement</span></h2>
                            
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center px-4">
                        <div className="formFieldCard">
                            <legend className="formLegend"><span className="formLegendSpan">01.</span> Achievement</legend>
        
                            <div className="formField">
                                {mutation.isError && (
                                    <p className="bg-error-container text-error">{mutation.error.message}</p>
                                )}
                                <label>Exercise</label>
                                <select onChange={handleChange} className="p-2 bg-on-secondary" id="exercise_id" name="exercise_id" value={achievementForm.exercise_id}>
                                    <option value="" disabled>Select an exercise</option>
                            
                                    {exercises ? exercises.map(e => (
                                        <option key={e.id} value={e.id} className="p-2 bg-on-background/20">{e.exercise}</option>
                                    ))
                                    :   <option className="bg-error-container text-error" disabled>Error: {error?.message}</option>
                                    }
                                </select>
                            </div>
        
                            <div className="formField">
                                <label>Weight</label>
                                <input onChange={handleChange} className="p-2 bg-on-background/20" name="weight" type="number" placeholder="Ej. 15" value={achievementForm.weight} />
                            </div>
                        </div>
                            
                        <div className="formFieldCard">
                            <legend className="formLegend"><span className="formLegendSpan">02.</span> Extras</legend>
        
                            <div className="formField">
                                <label>Achieved On</label>
                                <input onChange={handleChange} type="date" className="w-40 bg-on-background/20 p-2" name="achieved_on" />
                            </div>

                            <div className="formField">
                                <label>Notes</label>
                                <textarea onChange={handleChange} className="bg-on-background/20 p-2 resize-none" name="description" placeholder="Add your notes..." value={achievementForm.description}></textarea>
                            </div>
                        </div>
                            
                        { /* Discard/Save - Buttons */ }
                        <div className="mb-4 flex gap-10">
                            <button onClick={close} type="button" className="primaryButton bg-on-secondary/90 text-on-background">Discard</button>
                            <button type="submit" className="primaryButton bg-primary text-background">{mutation.isPending ? "Saving..." : "Save Achievement"}</button>
                        </div>
                    </form>
                </div>
        </section>
    )
}