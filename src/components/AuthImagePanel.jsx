import { AspectRatio } from "@/components/ui/aspect-ratio";

export function AuthImagePanel() {
  const hideOnError = (e) => {
    if (e.target.parentElement?.parentElement) {
      e.target.parentElement.parentElement.style.display = "none";
    }
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute z-1 top-0 left-10 w-[240px] transform -rotate-15">
        <AspectRatio ratio={1 / 1}>
          <img
            src="https://placehold.co/400x400/EAE0D5/4F634A?text=Core+Design"
            alt="Abstract home decor 1"
            className="object-cover rounded-lg"
            onError={hideOnError}
          />
        </AspectRatio>
      </div>
      <div className="absolute z-0 top-15 right-20 w-[240px] transform rotate-15">
        <AspectRatio ratio={1 / 1}>
          <img
            src="https://placehold.co/400x400/A8DADC/4F634A?text=Timeless"
            alt="Abstract home decor 2"
            className="object-cover rounded-lg"
            onError={hideOnError}
          />
        </AspectRatio>
      </div>
      <div className="absolute z-2 bottom-5 left-50 w-[240px] transform rotate-[30deg]">
        <AspectRatio ratio={1 / 1}>
          <img
            src="https://placehold.co/400x400/C27D65/FFFFFF?text=Quality"
            alt="Abstract home decor 3"
            className="object-cover rounded-lg"
            onError={hideOnError}
          />
        </AspectRatio>
      </div>
    </div>
  );
}
