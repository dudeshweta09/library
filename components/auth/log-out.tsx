"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const LogOut = () => {
  const router = useRouter();
  return (
    <div className=" mt-4 w-1/2 mx-auto">
    <Button className="w-full font-medium text-xl"
      onClick={() => {
        localStorage.setItem("loggedIn", JSON.stringify(false)),
          router.push("/");
      }}
    >LogOut</Button>
    </div>
  );
};

export default LogOut;
