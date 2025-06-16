import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const SignInPage = () => {
  return (
    <div className="flex flex-col justify-center w-auto items-center min-h-screen">
      <h2 className="text-2xl">Sign In</h2>
      <form className="flex flex-col justify-center w-full max-w-sm gap-4">
        <label htmlFor="email">Email</label>
        <Input
          name="email"
          placeholder="Type your email..."
          required
          type="email"
        />
        <Button type="submit" className="max-w-fit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SignInPage;
