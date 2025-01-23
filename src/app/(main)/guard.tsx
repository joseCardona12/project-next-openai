"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Loading from "@/ui/molecules/Loading/Loading";

interface GuardProps {
  children: React.ReactNode;
}

const Guard: React.FC<GuardProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storageUser: string | null = localStorage.getItem("user-storage");

    if (pathname === "/dashboard" && !storageUser) {
      router.push("/login");
      return;
    }

    if ((pathname === "/login" || pathname === "/register") && storageUser) {
      router.push("/dashboard");
      return;
    }

    setIsLoading(false);
  }, [pathname, router]);

  if (isLoading) {
    return <Loading />;
  }

  return <>{children}</>;
};

export default Guard;