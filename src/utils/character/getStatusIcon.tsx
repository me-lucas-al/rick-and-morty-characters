import { cn } from "@/lib/utils";
import { HeartIcon, SkullIcon, QuestionIcon, IconWeight } from "@phosphor-icons/react";

type StatusIconProps = {
  status: ICharacterStatus;
  weight?: IconWeight;
  className?: string;
  size?: number;
};

export function StatusIcon({ status, weight = "fill", className, size = 20 }: StatusIconProps) {
  switch (status.toLowerCase() as ICharacterStatus) {
    case "alive":
      return <HeartIcon weight={weight} size={size} className={cn("text-emerald-400", className)} />;
    case "dead":
      return <SkullIcon weight={weight} size={size} className={cn("text-red-400", className)} />;
    default:
      return <QuestionIcon weight={weight} size={size} className={cn("text-gray-400", className)} />;
  }
}
