"use client";

import * as React from "react";

import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { cn } from "@/lib/utils";

import { FieldValues } from "react-hook-form";

export interface SelectOptionsProps {
  id: number;
  label: string;
  value: string;
}

interface SelectProps {
  id: string;
  label: string;
  placeholder: string;
  field: FieldValues;
  classname?: string;
  error?: any;
  options: SelectOptionsProps[];
  required?: boolean;
}

export default function SelectField({
  label,
  placeholder,
  field,
  classname,
  error,
  options,
  required,
}: SelectProps) {
  return (
    <FormItem>
      <FormLabel
        htmlFor={label}
        className="block text-sm font-medium text-secondary-foreground"
      >
        {label}
        {required && <span className="ml-1 text-red-600 text-xs">*</span>}
      </FormLabel>
      <FormControl>
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <SelectTrigger
            className={cn(
              "w-full bg-secondary text-secondary-foreground data-[placeholder]:text-muted-foreground rounded-md",
              error ? "border-red-600" : "border-gray-300 dark:border-gray-800"
            )}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent
            className={cn(
              "w-full justify-between rounded-lg bg-background font-normal",
              classname
            )}
          >
            {options.map((item, i) => (
              <SelectItem className="cursor-pointer" key={i} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage className="text-xs font-normal text-rose-600">
        {error?.message}
      </FormMessage>
    </FormItem>
  );
}
