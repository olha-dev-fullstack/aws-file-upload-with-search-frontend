import { redirect } from "react-router";
import { isAuthenticated } from "../utils";

export async function protectedLoader() {
  if (!isAuthenticated()) {
    return redirect("/sign-in");
  }
  return null;
}
