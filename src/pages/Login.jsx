import { LoginForm } from "../components/LoginForm";
import { HeaderSection } from "../components/HeaderSection";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen lg:max-w-7xl mx-auto gap-8 items-center">
      <header className="flex w-full sticky top-0 z-10 bg-white pt-3">
        <HeaderSection
          title="Login to THE CORE HOME"
          badge="Welcome Back"
          description="Welcome back to The Core Home. Please login to manage your account and continue shopping."
          onBack={handleBack}
        />
      </header>
      <main className="flex flex-grow w-full justify-center">
        <LoginForm />
      </main>
    </div>
  );
};
