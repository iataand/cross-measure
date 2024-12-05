import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@radix-ui/themes";
import {
  IconBrandGoogleFilled,
  IconPhoneFilled,
  IconBrandMeta,
  IconX,
} from "@tabler/icons-react";

export default function LoginModal(props: { hasAccount?: boolean }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {props.hasAccount ? (
          <button className="h-12 w-full cursor-pointer rounded-3xl bg-gradient-to-r from-red-500 to-gamboge-500 text-lg font-bold text-white md:w-52">
            Create Account
          </button>
        ) : (
          <button className="h-12 w-full cursor-pointer rounded-3xl bg-white text-lg font-bold text-black md:w-52">
            Log in
          </button>
        )}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black md:bg-transparent" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-1/2 top-1/2 flex h-[100vh] w-[100dvw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between rounded-md bg-[#111418] p-12 text-center text-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none md:max-h-[fit-content] md:max-w-[450px]">
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
            <Button className="flex h-10 w-full cursor-pointer gap-2 rounded-3xl bg-[#1a73e8] text-lg font-semibold text-white hover:opacity-70">
              <IconBrandGoogleFilled /> Login with google
            </Button>
            <Button className="border-gray-100 onh flex h-10 w-full cursor-pointer gap-2 rounded-3xl border border-solid bg-transparent text-lg font-semibold text-white hover:opacity-70">
              <IconBrandMeta /> Log in with Facebook
            </Button>
            <Button className="border-gray-100 onh flex h-10 w-full cursor-pointer gap-2 rounded-3xl border border-solid bg-transparent text-lg font-semibold text-white hover:opacity-70">
              <IconPhoneFilled />
              Log in with Phone Number
            </Button>
            <a href="/" className="text-blue-400 underline">
              Trouble Logging In?
            </a>
          </div>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <IconX />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
