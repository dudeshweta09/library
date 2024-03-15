"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ProfileData from "./profile-data";

const LogOut = () => {
  const router = useRouter();

  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Avatar>
            <AvatarImage src="https://i.pinimg.com/originals/38/57/a5/3857a53a7e4de401993f84b9203bf680.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className=" w-full mx-auto">
          <ProfileData/><br/>
          <Button
            className="w-full mx-auto font-medium text-l mb-4 text-white"
            onClick={() => {
              localStorage.setItem("loggedIn", JSON.stringify(false)),
                router.push("/");
            }}
          >
            Log Out
          </Button><br/>
          <Button
            className="w-full mx-auto font-medium text-l text-white"
            onClick={() => {
              localStorage.clear(),
                router.push("/");
            }}
          >
            Delete A/C
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default LogOut;
