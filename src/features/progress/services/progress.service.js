import { supabase } from "@/lib/supabase"

export async function getProgressPerStudent(student_id) {
    let { data: progress, error } = await supabase
        .from('progress')
        .select("*")
        .eq('student_id', student_id)

    if (error) throw error

    return progress
} 

export async function createProgress(studentProgress) {
    const { data, error } = await supabase
        .from('progress')
        .insert(studentProgress)
        .select()
        .single();

    if (error) throw error

    return data
}