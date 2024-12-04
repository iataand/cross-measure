"use client";
import { Button } from "@radix-ui/themes";

export default function PrimaryButton(props: {
  text: string;
  style?: string;
  onClick?: () => void;
}) {
  return (
    <Button
      className={`${props.style ?? ""} cursor-pointer rounded-3xl bg-white text-lg text-black`}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
}
