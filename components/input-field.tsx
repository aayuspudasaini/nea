import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FieldValues } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: "text" | "number" | "email" | "password";
  placeholder: string;
  field: FieldValues;
  classname?: string;
  error?: any;
  disabled?: boolean;
  hidden?: boolean;
}

export default function InputField({
  id,
  label,
  type,
  placeholder,
  field,
  classname,
  error,
  disabled,
  hidden,
}: InputProps) {
  return (
    <FormItem className={hidden ? "hidden" : "block"}>
      <FormLabel
        htmlFor={label}
        className="block text-sm font-medium text-secondary-foreground"
      >
        {label}
      </FormLabel>
      <FormControl>
        <Input
          id={id}
          className={cn(
            "rounded-md text-base bg-secondary font-normal placeholder:text-sm ",
            classname,
            error ? "border-red-500" : "border-gray-300 dark:border-gray-800"
          )}
          type={type}
          placeholder={placeholder}
          {...field}
          disabled={disabled}
        />
      </FormControl>
      <FormMessage className="text-xs font-normal text-red-500">
        {error?.message}
      </FormMessage>
    </FormItem>
  );
}
