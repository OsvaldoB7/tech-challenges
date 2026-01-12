import { useState, FormEvent } from "react";
import { Input } from "../common/Inputs/Input";
import { Button } from "../common/Buttons/Button";

interface LoginFormProps {
  onLogin: (email: string) => void;
}

export const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLogin(email);
    }
  };

  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
      <div className="text-center mb-8">
        <div className="flex justify-center mb-6">
          <img
            src="/svg/shipay.svg"
            alt="Shipay Logo"
            className="h-20 w-auto"
          />
        </div>
        <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
          Painel Shipay para melhorar a sua experiência com o Pix e múltiplas
          carteiras digitais.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 pb-6 border-b border-gray-200">
          Acesso ao painel do cliente
        </h2>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            E-mail
          </label>
          <div className="relative">
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
            <div className="absolute right-4 top-3.5 text-teal-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Senha
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          Continuar
        </button>
      </div>
    </form>
  );
};
