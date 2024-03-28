"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { RegisterSchema } from "@/schema";
import { z } from "zod";

const ProfileData = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const getdata = JSON.parse(localStorage.getItem("Lib_UserDetails") ?? "[]");
    const loggedIn =
      getdata?.filter((ud: z.infer<typeof RegisterSchema>) => {
        setEmail(ud.email);
        setName(ud.name);
        setPassword(ud.password);
      })?.length > 0;
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-3/4 mx-auto font-medium text-l mb-4 text-white">
          Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Profile Details</DialogTitle>
          <DialogDescription>
            Your complete profile details....
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-3">
          <div className="grid grid-cols-1 items-center">
            <div className="">
              <Label htmlFor="name" className="text-right">
                Name - {name}
              </Label><br/>
              <Label htmlFor="name" className="text-right">
                Email - {email}
              </Label><br/>
              <Label htmlFor="name" className="text-right">
                Password - {password}
              </Label>
              </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileData;
