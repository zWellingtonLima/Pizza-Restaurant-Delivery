import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("mx-auto relative w-full px-4 max-w-6xl", className)}>
      {children}
    </div>
  );
};

export default Container;
