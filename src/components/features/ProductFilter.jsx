// src/components/features/ProductFilter.jsx
import { Typography } from "@/components/ui/Typography";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const ProductFilter = ({
  categories,
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange,
}) => {
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="space-y-8 sticky top-24">
      {" "}
      {/* ทำให้ Filter sticky ตาม Header */}
      {/* Category Filter */}
      <div>
        <Typography as="h3" className="mb-4">
          Category
        </Typography>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => handleCategoryChange(category)}
              />
              <Label htmlFor={category} className="font-normal cursor-pointer">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>
      {/* Price Filter */}
      <div>
        <Typography as="h3" className="mb-4">
          Price
        </Typography>
        <div className="flex items-center gap-2">
          <Input
            type="number"
            placeholder="From"
            value={priceRange.from}
            onChange={(e) =>
              setPriceRange((prev) => ({ ...prev, from: e.target.value }))
            }
          />
          <span>-</span>
          <Input
            type="number"
            placeholder="To"
            value={priceRange.to}
            onChange={(e) =>
              setPriceRange((prev) => ({ ...prev, to: e.target.value }))
            }
          />
        </div>
      </div>
    </div>
  );
};
