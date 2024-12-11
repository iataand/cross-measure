import { Button } from "@radix-ui/themes";

type MainButtonProps = {
  styles?: string;
  onClick?: () => void;
  children: React.ReactNode;
  props?: {};
};

export default function MainButton({
  styles,
  onClick,
  children,
  props,
}: MainButtonProps) {
  const isDisabled = props?.hasOwnProperty("disabled")!;

  if (isDisabled) {
    return (
      <button
        className={`h-12 w-full rounded-3xl bg-gradient-to-r from-red-500 to-gamboge-500 text-lg font-bold text-white opacity-40 md:w-52`}
        disabled
        onClick={onClick ?? undefined}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`h-12 w-full cursor-pointer rounded-3xl bg-gradient-to-r from-red-500 to-gamboge-500 text-lg font-bold text-white hover:opacity-85 md:w-52`}
      onClick={onClick ?? undefined}
      {...props}
    >
      {children}
    </button>
  );
}
