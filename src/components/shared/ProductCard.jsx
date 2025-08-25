import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Typography } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const ProductCard = ({
  id,
  imageUrl,
  title,
  price,
  room,
  badgeClassName,
  badgeSecondary,
  badgeOutline,
  className,
}) => {
  return (
    <Link to={`/product/${id}`} className="group">
      <Card
        className={cn(
          "flex flex-col h-full p-0 overflow-hidden border-0 shadow-none bg-transparent transition-transform duration-300 group-hover:scale-105",
          className
        )}
      >
        <CardHeader className="p-0">
          <AspectRatio ratio={1 / 1}>
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full rounded-md"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/400x400/f0f0f0/cccccc?text=Image";
              }}
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow p-0 gap-3 px-2">
          <Typography as="h4">{title}</Typography>
          <div className="flex flex-col items-start gap-3">
            {room && <Badge className={badgeClassName}>{room}</Badge>}
            {badgeSecondary && (
              <Badge variant="secondary">{badgeSecondary}</Badge>
            )}
            {badgeOutline && <Badge variant="outline">{badgeOutline}</Badge>}
          </div>
        </CardContent>
        <CardFooter className="px-2">
          <Typography as="h4">{price}</Typography>
        </CardFooter>
      </Card>
    </Link>
  );
};
