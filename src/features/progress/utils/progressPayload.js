
export function progressPayload(id, form) {
    const payload = {
        student_id: id,
        weight: Number(form.weight),
        body_fat: Number(form.body_fat),
        notes: form.notes,
    };

    if(form.recorded_at) {
        payload.recorded_at = form.recorded_at;
    }

    return payload;
}