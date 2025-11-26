import { twMerge } from "tailwind-merge";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={twMerge(
        "w-full md:max-w-3xl lg:max-w-7xl mx-auto px-4 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
}
