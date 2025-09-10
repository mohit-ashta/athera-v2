import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { AuthLayout } from "./components/common/layout";

export const SignUpPage = () => {
  return (
    <AuthLayout authTitle="Create an Account">
      <form className="mt-6 grid grid-cols-1 gap-6">
        <div className="flex gap-1 flex-col">
          <label htmlFor="" className="font-medium lg:text-lg text-md leading-[18px] text-secondary">
            Union Member ID
          </label>
          <Input type="text" placeholder="Enter your ALPA ID number" />
        </div>
        <div className="flex gap-1 flex-col">
          <label htmlFor="" className="font-medium lg:text-lg text-md leading-[18px] text-secondary">
            Create Password
          </label>
          <Input type="text" placeholder="Enter a new password" />
        </div>
        <div className="flex gap-1 flex-col">
          <label htmlFor="" className="font-medium lg:text-lg text-md leading-[18px] text-secondary">
            Confirm Password
          </label>
          <Input type="text" placeholder="Re-enter your new password" />
        </div>
        <div className="flex gap-1 flex-col">
          <Button variant={"default"} size={"default"} className="w-full ">
            Create Athera Account
          </Button>
        </div>
        <div>
          <h5 className="font-normal text-sm leading-5 text-secondary">
            Already have an account?{" "}
            <Link
              href={"/sign-in"}
              className="text-primary font-medium text-base leading-6"
            >
              Sign in
            </Link>
          </h5>
        </div>
      </form>
    </AuthLayout>
  );
};
