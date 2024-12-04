"use client";
import { Button } from "@radix-ui/themes";

export default function PrimaryButton(props: {
  text: string;
  onClick?: () => void;
}) {
  return (
    <Button
      className="to-gamboge-500 h-full w-full cursor-pointer rounded-3xl bg-gradient-to-r from-red-500 text-lg"
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
}
