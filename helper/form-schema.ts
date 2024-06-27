import * as  z from "zod";

export type FormType = z.infer<typeof FormSchema>

const ampereOptions = [
    "5amp",
    "15amp",
    "30amp",
    "60amp"
]

export const FormSchema = z.object(
    {
        "ampere": z.enum(ampereOptions, { message: "Invalid Options" }),
        "units": z.string().min(1, "Units is required."),
    },

)