import { twMerge } from "tailwind-merge";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

function Button({ children, className = "", ...rest }: ButtonProps) {
  const classes = twMerge(
    "rounded-2xl bg-purple-500 p-2 text-sm font-medium text-neutral-100 shadow-md transition-all hover:bg-purple-700 sm:text-base",
    className
  );

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;
