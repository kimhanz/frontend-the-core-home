import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const HeaderSection = ({ badge, title, description, onBack }) => {
  return (
    <div className="flex flex-col w-full gap-3 mb-1">
      {onBack && (
        <Button
          variant="outline"
          size="icon"
          onClick={onBack}
          className="cursor-pointer"
        >
          <ArrowLeft />
        </Button>
      )}
      <div className="flex flex-col w-full">
        <Typography as="h4" className="text-neutral-600">
          {badge}
        </Typography>
        <Typography as="h2">{title}</Typography>
        <Typography as="p">{description}</Typography>
      </div>
    </div>
  );
};
