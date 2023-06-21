import { ImSpinner2 } from "react-icons/im";
import { twMerge } from "tailwind-merge";

type SpinnerProps = {
  className?: string;
};

function Spinner({ className = "" }: SpinnerProps) {
  const classes = twMerge("animate-spin text-neutral-600", className);

  return <ImSpinner2 className={classes} />;
}

export default Spinner;
