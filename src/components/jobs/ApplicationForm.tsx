"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { Checkbox } from "../ui/checkbox";

const FormSchema = z.object({
  firstname: z.string().min(2, {
    message: "Invalid Firstname ",
  }),
  lastname: z.string().min(2, {
    message: "Invalid Lastname ",
  }),
  email: z.string().email({
    message: "Invalid email.",
  }),
  phone_number: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  country: z.string().min(4, {
    message: "Please enter a valid country.",
  }),
  city: z.string().min(4, {
    message: "Please enter a valid city.",
  }),
  state: z.string().min(4, {
    message: "Please enter a valid state.",
  }),
  zip_code: z.string().min(4, {
    message: "Please enter a valid zip code.",
  }),
  address: z.string().min(4, {
    message: "Please enter a valid address.",
  }),
});

export function ApplicationForm({
  inputs,
  checkbox,
  defaultInputs,
}: {
  inputs: [
    {
      name:
        | "phone_number"
        | "country"
        | "city"
        | "state"
        | "zip_code"
        | "address";
      placeholder: string;
    }
  ];
  checkbox: [
    {
      terms: string;
    }
  ];
  defaultInputs: any;
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      ...defaultInputs,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <div className="border border-slate-300 flex flex-col pt-12 pb-7 px-12 rounded-xl border-solid max-md:max-w-full w-1/2 max-md:px-5">
        <h2 className="text-2xl font-bold mb-4">Application Form</h2>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-3"
        >
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input required placeholder="first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input required placeholder="last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input required placeholder="email@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Resume</FormLabel>
                <FormControl>
                  <Input type="file" required placeholder="resume" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {inputs.map((item, index) => (
            <>
              <FormField key={index}
                control={form.control}
                name={item.name}
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>{item.placeholder}</FormLabel>
                    <FormControl>
                      <Input
                        required
                        placeholder={item.placeholder}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          ))}
          <div className="flex flex-col mt-8 gap-2 col-span-full">
            <div className="flex items-center gap-2">
              <Checkbox required id="terms1" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
              </div>
            </div>
            {checkbox.map((item, index) => (
              <div className="flex items-center gap-2" key={index}>
                <Checkbox required id={`terms${index + 2}`} />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor={`terms${index + 2}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {item.terms}
                  </label>
                </div>
              </div>
            ))}
          </div>
          <Button
            className="row-end-auto col-span-2 justify-self-end"
            type="submit"
            variant={"blue"}
          >
            Apply Now
          </Button>
        </form>
      </div>
    </Form>
  );
}
