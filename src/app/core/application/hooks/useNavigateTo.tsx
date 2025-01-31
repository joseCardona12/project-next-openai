import { redirect } from "next/navigation";

export default function UseNavigateTo(path: string) {
  redirect(path);
}
