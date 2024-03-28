"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React, { Children } from "react";
import AuthHeader from "./auth-header";
import BackButton from "./back-button";

interface CardWrapperProps {
  label: string;
  title: string;
  backbuttonhref: string;
  backbuttonlabel: string;
  children: React.ReactNode;
}
const CardWrapper = ({
  label,
  title,
  backbuttonhref,
  backbuttonlabel,
  children,
}: CardWrapperProps) => {
  return (
    <Card style={{}} className="xl:W-1/4 xl:text-xl md:w-1/2 shadow-md mx-auto">
      <CardHeader>
        <AuthHeader label={label} title={title} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton label={backbuttonlabel} href={backbuttonhref}/>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
