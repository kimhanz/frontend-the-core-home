import { HeaderSection } from "../components/shared/HeaderSection";
import { useNavigate } from "react-router-dom";
// import { LivingRoomProducts } from "../components/LivingRoomProduct";

export const ShoppingCart = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col min-h-screen lg:max-w-7xl mx-auto px-4 gap-8">
      <header className="flex w-full sticky top-0 z-10 bg-white pt-3">
        <HeaderSection
          title="My Shopping Cart"
          badge="Review Your Order"
          onBack={handleBack}
        />
      </header>
      <main className="flex flex-grow w-full">
        {/* <LivingRoomProducts /> */}
      </main>
    </div>
  );
};
