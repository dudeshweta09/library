"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn") ?? "false";
    if (loggedIn == "true") {
      setLoggedIn(true);
      router.push("/bookspage");
      return;
    }
    router.push("/auth/login");
  }, [loggedIn]);
  return <>{children}</>;
}
