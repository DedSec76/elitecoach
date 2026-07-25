import { supabase }  from "../../../lib/supabase";

export async function getStudents() {
  const { data, error } = await supabase
    .from('students')
    .select('*')
    .order("id");

  if (error) throw error;
  
  return data;
}

export async function getOneStudent(id) {
  let { data, error } = await supabase
    .from('students')
    .select("*")
    .eq('id', id)
    .single()

  if (error) throw error;

  return data
}

export async function insertStudent(studentData) {
  const { data, error } = await supabase
    .from('students')
    .insert(studentData)
    .select()
    .single();

  if(error) throw error;
  
  return data;
}

export async function updateStudent(id, studentData) {
  const { data, error } = await supabase
    .from('students')
    .update(studentData)
    .eq('id', id)
    .select()
    .single()
          
    if (error) throw error

    return data
}

export async function deleteStudent(id) {
  const { error } = await supabase
    .from('students')
    .delete()
    .eq("id", id)
    .single()

  if(error) throw error
  
}
