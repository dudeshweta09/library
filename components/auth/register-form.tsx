"use client";
import CardWrapper from "./card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RegisterSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast"

const RegisterForm = () => {
  const {toast} = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values:z.infer<typeof RegisterSchema>) => {
    const existAccount = JSON.parse(
      localStorage.getItem("Lib_UserDetails") || "[]"
    );
    if (existAccount) {
      const emailValue = Object.values(existAccount);
      for (const id of emailValue) {
        if (id.email === values.email) {
          return toast({
            description:"Account already Exist..."
          })
        }
      }
    }
    existAccount.push(values);
    localStorage.setItem("Lib_UserDetails", JSON.stringify(existAccount));
    toast({
      description:"Registered!!"
    })
    router.push("/"); 
  };
  return (
    <CardWrapper
      label="Create an account"
      title="Register"
      backbuttonhref="/"
      backbuttonlabel="Already have an account? Login here!"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email" className="xl:text-xl">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      placeholder="example@gamil.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="xl:text-xl">Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="David John"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="xl:text-xl">Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="john@1234"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="xl:text-xl">Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="john@1234"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full xl:text-xl">
            Register Now
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default RegisterForm;
