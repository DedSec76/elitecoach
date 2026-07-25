export const formatDate = (date) => {
    const newDate = new Date(date).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric"
    })

    return newDate
}