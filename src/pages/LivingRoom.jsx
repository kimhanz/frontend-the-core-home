import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "@/components/shared/ProductCard";
import { HeaderSection } from "@/components/shared/HeaderSection";
import { CarouselAutoplay } from "@/components/shared/CarouselAutoplay";
import { ProductFilter } from "@/components/shared/ProductFilter";
import { ProductFilterDrawer } from "@/components/shared/ProductFilterDrawer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

import { livingRoomData, getRecommendedProducts } from "@/data/roomData";

export const LivingRoom = () => {
  const navigate = useNavigate();
  const { products, inspirationImages, categories } = livingRoomData;
  const recommendedProducts = getRecommendedProducts("Living Room", 6);

  // --- State Management ---
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategories, setSelectedCategories] =
    React.useState(categories);
  const [priceRange, setPriceRange] = React.useState({ from: "", to: "" });
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);

  // --- Dynamic Filtering Logic ---
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategories.includes(product.badgeSecondary);

    const productPrice = parseFloat(product.price.replace(/[^0-9.-]+/g, ""));
    const fromPrice = parseFloat(priceRange.from);
    const toPrice = parseFloat(priceRange.to);
    const matchesPrice =
      (isNaN(fromPrice) || productPrice >= fromPrice) &&
      (isNaN(toPrice) || productPrice <= toPrice);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <>
      <section className="flex flex-col gap-6 mb-12">
        <header className="flex sticky top-0 z-10 bg-white pt-3">
          <div className="container lg:max-w-7xl mx-auto">
            <HeaderSection
              badge="The Core of Connection"
              title="Living Room"
              badgeClassName="text-amber-700"
              onBack={() => navigate("/")}
            />
          </div>
        </header>
        <main className="flex lg:max-w-7xl container mx-auto px-13">
          <CarouselAutoplay images={inspirationImages} />
        </main>
      </section>

      {/* === Section 2: Products === */}
      <section className="flex flex-col gap-6 mb-12">
        <header className="flex sticky top-0 z-10 bg-white pt-3">
          <div className="container lg:max-w-7xl mx-auto">
            <HeaderSection
              badge="Our Curated Collection"
              title="Pieces for connection & comfort"
              badgeClassName="text-amber-700"
              onBack={() => navigate("/")}
            />
          </div>
        </header>
        <main className="flex flex-col lg:max-w-7xl container mx-auto">
          <div className="flex gap-3 mb-8">
            <Input
              className="flex-grow"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              className="size-8 lg:hidden"
              variant="outline"
              size="icon"
              onClick={() => setIsFilterOpen(true)}
            >
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            <aside className="hidden lg:block lg:col-span-1 sticky top-40 self-start">
              <ProductFilter
                categories={categories}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />
            </aside>
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </main>
      </section>

      <ProductFilterDrawer
        isOpen={isFilterOpen}
        setIsOpen={setIsFilterOpen}
        categories={categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />

      {/* === Section 3: You Might Also Like === */}
      <section className="flex flex-col gap-6 mb-12">
        <header className="flex sticky top-0 z-10 bg-white pt-3">
          <div className="container lg:max-w-7xl mx-auto">
            <HeaderSection
              badge="Build Your Foundation"
              title="You Might Also Like"
              badgeClassName="text-amber-700"
              onBack={() => navigate("/")}
            />
          </div>
        </header>
        <main className="flex flex-col container">
          <div className="overflow-x-auto pt-4 pb-10 scroll-snap-x-mandatory">
            <div
              className="flex gap-10"
              style={{ padding: "0 calc(50vw - 664px + 1rem)" }}
            >
              {recommendedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-[313px] scroll-snap-start"
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
