import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ProductFilter } from "./ProductFilter";

export function ProductFilterDrawer({
  isOpen,
  setIsOpen,
  categories,
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange,
}) {
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Filter Products</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <ProductFilter
              categories={categories}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </div>
          <DrawerFooter>
            <Button onClick={() => setIsOpen(false)}>Apply Filters</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
