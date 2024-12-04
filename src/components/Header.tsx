import { Text } from "@radix-ui/themes";
import SecondaryButton from "./SecondaryButton";

export default function Header() {
  return (
    <main className="flex items-center justify-between p-4">
      <Text className="text-2xl font-bold">CrossMeasure</Text>
      <div className="h-10 w-32">
        <SecondaryButton text="Log in" />
      </div>
    </main>
  );
}
