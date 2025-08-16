import { ForgotPasswordForm } from "../components/ForgotPasswordForm";
import { HeaderSection } from "../components/HeaderSection";
import { useNavigate } from "react-router-dom";

export const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col min-h-screen lg:max-w-7xl mx-auto gap-8 items-center">
      <header className="flex w-full sticky top-0 z-10 bg-white pt-3">
        <HeaderSection
          title="Reset Your Password"
          badge="Account Recovery"
          description="No worries. Simply enter your email address below, and we'll send you instructions to safely reset your password."
          onBack={handleBack}
        />
      </header>
      <main className="flex flex-grow w-full justify-center">
        <ForgotPasswordForm />
      </main>
    </div>
  );
};
