import { cn } from "@/lib/utils";
import { Clock10, MapPin, Phone, LucideProps } from "lucide-react";
import { Titan_One } from "next/font/google";

const lucideIcons: Record<string, React.FC<LucideProps>> = {
  Clock10,
  MapPin,
  Phone,
};

const titan = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

interface InfoProps {
  icon?: string;
  iconSize: "lg" | "sm";
  title: string;
  subtitle?: string;
  content: string;
}

const Info = ({ icon, iconSize, title, subtitle, content }: InfoProps) => {
  const IconComponent = lucideIcons[icon || ""];

  return (
    <div className="w-72 border p-2 rounded-2xl border-primary-main shadow-lg shadow-primary-main/20">
      <div className="flex flex-col items-center">
        {icon && IconComponent && (
          <IconComponent
            className={cn(
              "text-primary-main mb-2",
              iconSize === "lg" ? "h-14 w-14" : "h-10 w-10"
            )}
          />
        )}

        <h2 className={`${titan.className} font-bold`}>{title}</h2>
        <h3 className={`${titan.className} mb-1`}>{subtitle}</h3>
        <span className="text-sm font-bold text-gray-500">{content}</span>
      </div>
    </div>
  );
};

export default Info;
