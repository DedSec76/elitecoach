import { supabase } from "@/lib/supabase";


export async function getAllGoals() {
    let { data: goal, error } = await supabase
        .from('goal')
        .select('*')

    if(error) throw error

    return goal;
}