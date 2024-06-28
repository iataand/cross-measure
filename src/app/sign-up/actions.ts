"use server";
import { signUp } from "aws-amplify/auth";

export default async function signUpAction(formData: FormData) {
  const { isSignUpComplete, userId, nextStep } = await signUp({
    username: formData.get("email")?.toString() ?? "",
    password: formData.get("password")?.toString() ?? "",
  });

  console.log(isSignUpComplete, userId, nextStep);
}
