

export function buildStudentPayload(formData) {
    return {
        ...formData,
        initial_weight: formData.current_weight,
        initial_body_fat: formData.current_body_fat,
    };
}