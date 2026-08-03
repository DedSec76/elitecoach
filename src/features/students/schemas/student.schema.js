import { GOALS } from "@/shared/constants/goals";
import { z } from "zod";

export const studentSchema = z.object({
    full_name: z.string("Too short!").min(1),
    age: z.number("Not a number"),
    phone: z.string(),
    weight: z.number("Not a number"),
    height: z.number("Not a number"),
    body_fat: z.number("Not a number"),
    goal: z.enum(GOALS.map(goal => goal.value))
}) 