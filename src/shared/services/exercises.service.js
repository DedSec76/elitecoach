import { supabase } from "@/lib/supabase"

export async function getExercises() {
    let { data: exercises, error } = await supabase
        .from('exercises')
        .select('*')
        .order('exercise')

    if (error) throw error

    return exercises
}
          