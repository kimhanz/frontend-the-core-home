import { HeaderSection } from "../components/HeaderSection";
import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../components/RegisterForm";

export const Register = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col min-h-screen lg:max-w-7xl mx-auto gap-8 items-center">
      <header className="flex w-full sticky top-0 z-10 bg-white pt-3">
        <HeaderSection
          title="Register to THE CORE HOME"
          badge="Create Your Account"
          description="Create an account for a more convenient shopping experience, allowing you to track your orders and save your favorite items to your wishlist."
          onBack={handleBack}
        />
      </header>
      <main className="flex flex-grow w-full justify-center">
        <RegisterForm />
      </main>
    </div>
  );
};
