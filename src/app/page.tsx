import { Button } from "@radix-ui/themes";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <Button className="to-gamboge-500 h-10 w-40 bg-gradient-to-r from-red-500">
        Sign In
      </Button>
    </main>
  );
}
