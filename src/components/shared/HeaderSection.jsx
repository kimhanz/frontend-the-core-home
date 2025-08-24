import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export const HeaderSection = ({
  badge,
  title,
  description,
  onBack,
  badgeClassName,
  className,
}) => {
  return (
    <div className={cn("flex flex-col w-full gap-3 mb-1", className)}>
      {onBack && (
        <Button
          variant="outline"
          size="icon"
          onClick={onBack}
          className="cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
      )}
      <div className="flex flex-col w-full">
        <Typography as="h4" className={cn("text-neutral-600", badgeClassName)}>
          {badge}
        </Typography>
        <Typography as="h2">{title}</Typography>
        {description && <Typography as="p">{description}</Typography>}
      </div>
    </div>
  );
};
