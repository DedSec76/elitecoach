
export const env = {
    apiUrl: import.meta.env.VITE_SUPABASE_URL,
    apiKey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
} 

if (!env.apiUrl) {
  throw new Error("VITE_SUPABASE_URL no está definida.");
}

if (!env.apiKey) {
  throw new Error("VITE_SUPABASE_ANON_KEY no está definida.");
}