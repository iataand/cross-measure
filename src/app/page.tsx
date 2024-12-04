import Header from "~/components/Header";
import PrimaryButton from "~/components/PrimaryButton";
import { Text } from "@radix-ui/themes";

export default function HomePage() {
  return (
    <main className="bg-gamboge-100">
      <Header />
      <div className="flex h-[calc(100dvh-72px)] items-center justify-center">
        <div className="flex flex-col items-center gap-8">
          <Text className="font-bold lg:text-8xl">Find you musical peer.</Text>
          <div className="h-10 w-52">
            <PrimaryButton text="Create account" />
          </div>
        </div>
      </div>
    </main>
  );
}
