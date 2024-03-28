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
import { useToast } from "@/components/ui/use-toast"


const LoginForm = () => {
  const {toast} = useToast();
  const router = useRouter();
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    const getdata = JSON.parse(localStorage.getItem("Lib_UserDetails") ?? "[]");
    const loggedIn =
      getdata?.filter((ud: z.infer<typeof RegisterSchema>) => {
        return ud.email == values.email && ud.password == values.password;
      })?.length > 0;
    if (loggedIn) {
      localStorage.setItem("Lib_loggedIn", JSON.stringify(true));
      toast({
        description:"You are Logged-In"
      })
      router.push("/bookspage");
    } else {
      toast({
        description:"Invalid Credentials...."
      })
    }
  };
  const onKeyDown = (e: { key: string; }) =>{
    if(e.key == 'Enter'){
      onSubmit
    }
  }
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
                  <FormLabel className="xl:text-xl">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="example@gamil.com"
                      className="xl:text-md"
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
                    <Input {...field} className="xl:text-md" onKeyDown={onKeyDown} type="password" placeholder="john@1234" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full xl:text-xl">
            LogIn
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
