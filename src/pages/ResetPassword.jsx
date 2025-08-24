import { HeaderSection } from "../components/shared/HeaderSection";
import { useNavigate } from "react-router-dom";
import { ResetPasswordForm } from "../components/features/ResetPasswordForm";

export const ResetPassword = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col min-h-screen lg:max-w-7xl mx-auto px-4 gap-8">
      <header className="flex w-full sticky top-0 z-10 bg-white pt-3">
        <HeaderSection
          title="Set a New Password"
          badge="Account Recovery"
          description="No worries. Simply enter your email address below, and we'll send you instructions to safely reset your password."
          onBack={handleBack}
        />
      </header>
      <main className="flex flex-grow w-full justify-center">
        <ResetPasswordForm />
      </main>
    </div>
  );
};
