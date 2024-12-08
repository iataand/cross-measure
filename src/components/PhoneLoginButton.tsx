import { Button } from "@radix-ui/themes";
import { IconPhoneFilled } from "@tabler/icons-react";

export default function PhoneLoginButton() {
  return (
    <Button className="onh flex h-10 w-full cursor-pointer gap-2 rounded-3xl border border-solid border-gray-100 bg-transparent text-lg font-semibold text-white hover:opacity-70">
      <IconPhoneFilled />
      Log in with Phone Number
    </Button>
  );
}
