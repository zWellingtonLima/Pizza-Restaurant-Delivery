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
  iconSize?: "sm";
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
        "min-w-[200px] border py-3 px-6 rounded-2xl border-primary-main/50 text-center shadow-lg shadow-primary-main/20",
        background && "bg-primary-main/10",
        Icon && !background && "border-primary-main/20",
      )}
    >
      <div className="flex flex-col items-center">
        {Icon && (
          <Icon
            className={cn(
              "text-primary-main mb-2 w-8 h-8",
              iconSize === "sm" ? "h-6 w-6" : "",
            )}
          />
        )}

        {icon && IconComponent && (
          <IconComponent className={"text-primary-main mb-2 h-8 w-8 md:h-10 md:w-10"} />
        )}

        <CustomElement element="p">{title}</CustomElement>
        <CustomElement element="span" className={"mb-2"}>
          {subtitle}
        </CustomElement>
        <span className="font-bold text-gray-500">{content}</span>
      </div>
    </div>
  );
};

export default Info;
