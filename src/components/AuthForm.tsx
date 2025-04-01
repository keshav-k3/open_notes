"use client";

import { useRouter } from "next/navigation";
import { useSonner } from "sonner";
import { CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useTransition } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";

type Props = {
  type: "login" | "signUp";
};

function AuthForm({ type }: Props) {
  const isLoginForm = type === "login";

  const router = useRouter();
  const toast = useSonner();

  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    console.log("form submitted");
  };
  return (
    <form action={handleSubmit}>
      <CardContent className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            className="mt-2 w-full"
            placeholder=" Enter your Email"
            required
            disabled={isPending}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            className="mt-2 w-full"
            placeholder=" Enter your Password"
            required
            disabled={isPending}
          />
        </div>
      </CardContent>
      <CardFooter className="mt-4 flex flex-col gap-6">
        <Button className="w-full">
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : isLoginForm ? (
            "Log In"
          ) : (
            "Sign Up"
          )}
        </Button>
        <p className="text-center text-xs">
          {isLoginForm ? "Don't have an account?" : "Already have an account?"}{" "}
          <Link
            href={isLoginForm ? "/signUp" : "/login"}
            className={`text-blue-500 underline ${
              isPending ? "pointer-events-none opacity-50" : ""
            }`}
          >
            {isLoginForm ? "Sign Up" : "Log In"}
          </Link>
        </p>
      </CardFooter>
    </form>
  );
}

export default AuthForm;
