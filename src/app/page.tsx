import { Text } from "@radix-ui/themes";
import LoginModal from "~/components/LoginModal";

export default function HomePage() {
  return (
    <main className="bg-[url('https://images.pexels.com/photos/145707/pexels-photo-145707.jpeg')] bg-cover">
      <div className="flex h-[72px] items-center justify-between p-4">
        <Text className="text-2xl font-bold text-white">CrossMeasure</Text>
        <span className="hidden h-10 md:block">
          <LoginModal hasAccount={false} />
        </span>
      </div>
      <div className="flex h-[calc(100dvh-72px)] items-center justify-center">
        <div className="flex flex-col items-center gap-8 px-4">
          <Text className="text-3xl font-bold text-white md:text-6xl lg:text-8xl">
            Find your musical peer.
          </Text>
          <div className="flex w-full flex-col items-center gap-2">
            <LoginModal hasAccount={true} />
            <span className="block h-12 w-full md:hidden">
              <LoginModal hasAccount={false} />
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
