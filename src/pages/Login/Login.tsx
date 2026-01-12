import { LoginForm } from "../../components/LoginForm/LoginForm";

interface LoginProps {
  onLogin: (email: string) => void;
}

export const Login = ({ onLogin }: LoginProps) => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Background" 
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <LoginForm onLogin={onLogin} />
      </div>
    </div>
  );
};
