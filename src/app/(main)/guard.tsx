"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Loading from "@/ui/molecules/Loading/Loading";
import { IRoutesProps, routes } from "./routes";

interface GuardProps {
  children: React.ReactNode;
}

const Guard: React.FC<GuardProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storageUser: string | null = localStorage.getItem("user-storage");
    const privateRoute: IRoutesProps | undefined = routes.private.find((route: IRoutesProps) => route.path === pathname);
    const publicRoute: IRoutesProps | undefined = routes.public.find((route: IRoutesProps) => route.path === pathname);

    if (privateRoute&& !storageUser) {
      router.push("/login");
      return;
    };

    if (publicRoute && storageUser) {
      router.push("/dashboard");
      return;
    };

    setIsLoading(false);
  }, [pathname, router]);

  if (isLoading) {
    return <Loading />;
  }

  return <>{children}</>;
};

export default Guard;