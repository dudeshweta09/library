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
        <PopoverContent>
          <Button
            className="w-1/2 font-medium text-xl mb-4">
            Profile
          </Button><br/>
          <Button
            className="w-1/2 font-medium text-xl"
            onClick={() => {
              localStorage.setItem("loggedIn", JSON.stringify(false)),
                router.push("/");
            }}
          >
            Log Out
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default LogOut;
