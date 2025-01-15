import { redirect } from "next/navigation";

export default function HomeView(): React.ReactNode{
  redirect("/login");
};