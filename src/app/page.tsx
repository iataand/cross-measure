import PrimaryButton from "~/components/PrimaryButton";
import { Text } from "@radix-ui/themes";
import SecondaryButton from "~/components/SecondaryButton";

export default function HomePage() {
  return (
    <main className="bg-gamboge-100">
      <div className="flex h-[72px] items-center justify-between p-4">
        <Text className="text-2xl font-bold">CrossMeasure</Text>
        <SecondaryButton text="Log in" style="hidden h-10 w-32 md:block" />
      </div>
      <div className="flex h-[calc(100dvh-72px)] items-center justify-center">
        <div className="flex flex-col items-center gap-8 px-4">
          <Text className="text-3xl font-bold md:text-6xl lg:text-8xl">
            Find you musical peer.
          </Text>
          <div className="flex w-full flex-col items-center gap-2">
            <PrimaryButton text="Create account" style="md:w-52 h-12 w-full" />
            <SecondaryButton
              text="Log in"
              style="block w-full h-12 md:hidden"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
