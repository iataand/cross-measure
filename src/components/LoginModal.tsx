import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@radix-ui/themes";
import { IconPhoneFilled, IconBrandMeta, IconX } from "@tabler/icons-react";
import GoogleLoginButton from "./GoogleLoginButton";

export default function LoginModal(props: { hasAccount?: boolean }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {props.hasAccount ? (
          <Button className="h-12 w-full cursor-pointer rounded-3xl bg-gradient-to-r from-red-500 to-gamboge-500 text-lg font-bold text-white md:w-52">
            Create Account
          </Button>
        ) : (
          <Button className="h-12 w-full cursor-pointer rounded-3xl bg-white text-lg font-bold text-black md:w-52">
            Log in
          </Button>
        )}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/50" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-1/2 top-1/2 flex h-[100vh] w-[100dvw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between gap-6 rounded-md bg-[#111418] p-12 text-center text-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none md:max-h-[fit-content] md:max-w-[450px]">
          <div>
            <Dialog.Title className="m-0 text-3xl font-medium">
              {props.hasAccount ? "Create account" : "Get Started"}
            </Dialog.Title>
            <Dialog.Description className="text-md mb-5 mt-2.5 px-2">
              By tapping Log In or Continue, you agree to our Terms. Learn how
              we process your data in our Privacy Policy, and Cookie Policy.
            </Dialog.Description>
          </div>
          <div className="flex w-full max-w-[315px] flex-col gap-4">
            <GoogleLoginButton />
            <Button className="onh flex h-10 w-full cursor-pointer gap-2 rounded-3xl border border-solid border-gray-100 bg-transparent text-lg font-semibold text-white hover:opacity-70">
              <IconBrandMeta /> Log in with Facebook
            </Button>
            <Button className="onh flex h-10 w-full cursor-pointer gap-2 rounded-3xl border border-solid border-gray-100 bg-transparent text-lg font-semibold text-white hover:opacity-70">
              <IconPhoneFilled />
              Log in with Phone Number
            </Button>
            <a href="/" className="text-blue-400 underline">
              Trouble Logging In?
            </a>
          </div>
          <Dialog.Close asChild>
            <Button
              className="text-violet11 focus:shadow-violet7 absolute right-2.5 top-2.5 inline-flex size-[25px] cursor-pointer appearance-none items-center justify-center rounded-full hover:bg-gray-50/10 focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <IconX />
            </Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
