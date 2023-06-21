import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  id: string;
  label?: React.ReactNode;
  isInvalid?: boolean;
  errorMsg?: string;
  className?: string;
};

function Input(props: InputProps) {
  const { id, label, isInvalid = false, errorMsg, className = "", ...rest } = props;

  const classes = twMerge("border-b-2 border-neutral-300 px-2 py-1 outline-purple-300", className);

  return (
    <div className="relative flex flex-col justify-center text-neutral-500">
      {label && (
        <label className="flex cursor-pointer items-center gap-4 text-sm font-medium" htmlFor={id}>
          {label}
        </label>
      )}

      <input className={classes} id={id} {...rest} />

      {isInvalid && errorMsg && <p>{errorMsg}</p>}
    </div>
  );
}

export default Input;
