"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import signUpAction from "./actions";

export default function RegisterForm() {
  return (
    <form action={signUpAction} className="container my-4 flex flex-col gap-4">
      <Input name="email" placeholder="Please Enter Email" />
      <Input
        name="password"
        type="password"
        placeholder="Please Enter Password"
      />
      <Button type="submit">Sign Up</Button>
    </form>
  );
}
