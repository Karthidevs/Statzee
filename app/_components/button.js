"use client";

import { useFormStatus } from "react-dom";

export default function Button({
  children,
  className,
  onClick,
  type,
  disabled,
}) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={` ${className} p-2 bg-[#4169e1] rounded-md text-center
    hover:bg-[#294497]  text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export const FormButton = ({ type, className }) => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      type={type}
      className={` ${className} p-2 bg-[#4169e1] rounded-md text-center
hover:bg-[#294497]  text-white disabled:bg-[#294497] `}
    >
      {pending ? "Submitting..." : " submit"}
    </Button>
  );
};
