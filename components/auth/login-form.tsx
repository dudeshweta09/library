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
import { LoginSchema, RegisterSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { z } from "zod";

const LoginForm = () => {
  const router = useRouter();
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    const getdata = JSON.parse(localStorage.getItem("UserDetails") ?? "[]");
    const loggedIn =
      getdata?.filter((ud: z.infer<typeof RegisterSchema>) => {
        return ud.email == values.email && ud.password == values.password;
      })?.length > 0;
    if (loggedIn) {
      localStorage.setItem("loggedIn", JSON.stringify(true));
      alert("you are loggedIn");
      router.push("/bookspage");
    } else {
      alert("Invalid Credentials");
    }
  };
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <CardWrapper
      label="Login to your account"
      title="Welcome to Open Library"
      backbuttonhref="/auth/register"
      backbuttonlabel="New User ! Register here.."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="john@1234" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full">
            LogIn
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
