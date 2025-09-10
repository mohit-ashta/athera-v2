import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { AuthLayout } from "./components/common/layout";

export const SignInPage = () => {
  return (
    <AuthLayout authTitle="Welcome">
      <form className="mt-6 grid grid-cols-1 gap-6">
        <div className="flex gap-1 flex-col">
          <label
            htmlFor=""
            className="font-medium lg:text-lg text-md leading-[18px] text-secondary"
          >
            Union Member ID
          </label>
          <Input type="text" placeholder="Enter your ALPA ID number" />
        </div>
        <div className="flex gap-1 flex-col">
          <label
            htmlFor=""
            className="font-medium lg:text-lg text-md leading-[18px] text-secondary"
          >
            Password
          </label>
          <Input type="text" placeholder="Enter your password" />
        </div>
        <div className="flex gap-1 flex-col">
          <Button variant={"default"} size={"default"} className="w-full ">
            Create Athera Account
          </Button>
        </div>
        <h5 className="font-normal text-sm leading-5 text-secondary">
          Don’t have an account?
          <Link
            href={"/sign-up"}
            className="text-primary font-medium text-base leading-6 underline pl-2"
          >
            Signup
          </Link>
        </h5>
        <h5 className="lg:text-base text-sm leading-6 underline text-primary text-center">
          Forgot your password?
        </h5>
      </form>
    </AuthLayout>
  );
};
