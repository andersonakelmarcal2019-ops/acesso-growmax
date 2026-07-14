import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff, Activity } from 'lucide-react';

interface AuthScreenProps {
  onLogin: (username: string) => void;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ onLogin }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      onLogin(username);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 animate-fade-in">
      {/* Logo Area */}
      <div className="mb-8 flex flex-col items-center">
        <div className="w-24 h-24 bg-gradient-to-br from-red-900 to-red-600 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.5)] mb-4">
          <Activity size={48} className="text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">
          Grow <span className="text-red-600">Max</span>
        </h1>
        <p className="text-gray-500 mt-2">
          {isRegistering ? 'Crie sua conta para começar' : 'Entre com suas credenciais'}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300 ml-1">Usuário</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-500 group-focus-within:text-red-500 transition-colors" />
            </div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full pl-11 pr-4 py-4 bg-neutral-900 border border-neutral-800 rounded-xl text-white placeholder-gray-600 focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-none transition-all"
              placeholder="Digite seu usuário"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300 ml-1">Senha</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-500 group-focus-within:text-red-500 transition-colors" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full pl-11 pr-12 py-4 bg-neutral-900 border border-neutral-800 rounded-xl text-white placeholder-gray-600 focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-none transition-all"
              placeholder="Digite sua senha"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-500 hover:text-white" />
              ) : (
                <Eye className="h-5 w-5 text-gray-500 hover:text-white" />
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-red-700 hover:bg-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-900/20 transform active:scale-[0.98] transition-all duration-200"
        >
          {isRegistering ? 'Cadastrar' : 'Entrar'}
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-neutral-500 text-sm">
          {isRegistering ? 'Já tem uma conta?' : 'Ainda não tem conta?'}
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="ml-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
          >
            {isRegistering ? 'Entrar' : 'Cadastrar-se'}
          </button>
        </p>
      </div>

      <div className="mt-auto pt-10 pb-4 text-center">
        <p className="text-xs text-neutral-600">Credenciais fornecidas pelo administrador</p>
      </div>
    </div>
  );
};

export default AuthScreen;