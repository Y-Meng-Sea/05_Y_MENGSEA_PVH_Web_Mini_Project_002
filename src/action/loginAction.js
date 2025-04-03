"use server";
import { redirect } from "next/navigation";
import { signIn } from "../../auth";

export const loginAction = async (formData) => {
     const email = formData.get("email");
     const password = formData.get("password");

     await signIn("credentials", {
          email,
          password,
          redirect: false,
     });
     redirect("/workspace");
};
