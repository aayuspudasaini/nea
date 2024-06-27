import * as  z from "zod";

export type FormType = z.infer<typeof FormSchema>

export const FormSchema = z.object(
    {
        "ampere": z.enum(
            [
                "5amp",
                "15amp",
                "30amp",
                "60amp"
            ], { message: "Please select a valid ampere options" }).transform((key) => key as string),
        "units": z.string().min(1, "Units is required."),
    },

)