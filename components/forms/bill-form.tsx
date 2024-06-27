"use client";
import { useForm } from "react-hook-form";
import { Form, FormField } from "../ui/form";
import SelectField from "../select-field";
import InputField from "../input-field";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema, FormType } from "@/helper/form-schema";
import { AmpereOptions } from "@/constants/ampere-options";
import * as React from "react";
import NeaElectricityBillAmountCalculator from "@/helper/bill-calculation";

export default function BillForm() {
  const [billCalculation, setBillCalculation] = React.useState<any>();
  const form = useForm({
    defaultValues: {
      ampere: "",
      units: "",
    },
    resolver: zodResolver(FormSchema),
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = (values: FormType) => {
    try {
      const billingAmount = NeaElectricityBillAmountCalculator({
        ampere: values.ampere,
        consumedUnits: parseInt(values.units),
      });

      if (billingAmount) {
        setBillCalculation(
          <div className="mt-4">
            <p className="block mb-2 text-sm font-medium text-secondary-foreground">
              Bill Calculation
            </p>
            <div className="px-4 py-2.5 rounded-md w-full bg-secondary border-gray-300 dark:border-gray-800">
              <div className="flow-root mb-2">
                <h5 className="float-left text-sm font-medium">
                  Energy Charge
                </h5>
                <p className="float-right  text-sm font-medium">
                  {billingAmount.energyCharge}
                </p>
              </div>
              <div className="flow-root">
                <h5 className="float-left text-sm font-medium">
                  Service Charge
                </h5>
                <p className="float-right  text-sm font-medium">
                  {billingAmount.serviceCharge}
                </p>
              </div>
              <hr className="my-3 border border-gray-400 border-dashed" />
              <div className="flow-root">
                <h5 className="float-left text-sm font-medium text-primary">
                  Total Bill Amount
                </h5>
                <p className="float-right  text-sm font-semibold text-primary">
                  {billingAmount.energyCharge + billingAmount.serviceCharge}
                </p>
              </div>
            </div>
          </div>
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2.5">
          <FormField
            control={form.control}
            name="ampere"
            render={({ field }) => (
              <SelectField
                label="Select Ampere"
                field={field}
                id="ampere"
                placeholder="Select an Ampere"
                options={AmpereOptions}
                error={form.formState.errors["ampere"]}
              />
            )}
          />
          <FormField
            control={form.control}
            name="units"
            render={({ field }) => (
              <InputField
                field={field}
                label="Units"
                placeholder="123"
                id="units"
                error={form.formState.errors["units"]}
              />
            )}
          />
          <Button
            variant="default"
            className="w-full rounded-md"
            disabled={isLoading}
          >
            Calculate
          </Button>
        </form>
      </Form>
      {billCalculation}
    </>
  );
}
