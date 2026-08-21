import { supabase } from "@/lib/supabase";

export async function getAchievementPerStudent(student_id) {
    let { data: achievement, error } = await supabase
        .from('achievement')
        .select(`id, weight,
                exercises (
                    exercise
                )
        `)
        
        .eq('student_id', student_id)
        .order('achieved_on', { ascending: false })
        .limit(2)

    if (error) throw error

    return achievement
}

export async function createAchievement(achievementForm) {
    const { data, error } = await supabase
        .from('achievement')
        .insert(achievementForm)
        .select()
        .single();

    if(error) throw error

    return data
}