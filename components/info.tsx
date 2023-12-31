import { cn } from "@/lib/utils";
import { Clock10, MapPin, Phone, LucideProps } from "lucide-react";
import { IconType } from "react-icons";
import CustomElement from "./customElement";

const lucideIcons: Record<string, React.FC<LucideProps>> = {
  Clock10,
  MapPin,
  Phone,
};

interface InfoProps {
  icon?: string;
  iconSize?: "lg" | "sm";
  reactIcon?: IconType;
  title: string;
  subtitle?: string;
  content: string;
  background?: boolean;
}

const Info = ({
  icon,
  iconSize,
  title,
  subtitle,
  content,
  background,
  reactIcon: Icon,
}: InfoProps) => {
  const IconComponent = lucideIcons[icon || ""];

  return (
    <div
      className={cn(
        "w-72 border p-3 rounded-2xl border-primary-main/50 text-center shadow-lg shadow-primary-main/20 hover:scale-105 transition",
        background && "bg-primary-main/10",
        Icon && !background && "border-primary-main/20"
      )}
    >
      <div className="flex flex-col items-center">
        {Icon && <Icon className="h-14 w-14 text-primary-main mb-2" />}

        {icon && IconComponent && (
          <IconComponent className={"text-primary-main mb-2 h-10 w-10"} />
        )}

        <CustomElement element="h2">{title}</CustomElement>
        <CustomElement element="h3" className={"mb-2"}>
          {subtitle}
        </CustomElement>
        <span className="font-bold text-gray-500">{content}</span>
      </div>
    </div>
  );
};

export default Info;
