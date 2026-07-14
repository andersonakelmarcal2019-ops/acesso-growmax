import React, { useState } from 'react';
import { Ruler, Calendar, Users, ChevronRight } from 'lucide-react';
import { UserData } from '../types';

interface OnboardingScreenProps {
  onComplete: (data: Partial<UserData>) => void;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<Partial<UserData>>({
    heightCurrent: 170,
    age: 18,
    gender: 'male',
  });

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete({
        ...data,
        heightInitial: data.heightCurrent,
        heightGoal: (data.heightCurrent || 170) + 5, // Default goal +5cm
        level: 1,
        xp: 0
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col p-6 animate-fade-in">
      <div className="w-full h-1 bg-neutral-900 mt-4 rounded-full overflow-hidden">
        <div 
          className="h-full bg-red-600 transition-all duration-500 ease-out"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
        {step === 1 && (
          <div className="space-y-8 animate-slide-up">
            <div className="text-center">
              <Ruler className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Qual sua altura?</h2>
              <p className="text-gray-400">Para calcularmos seu potencial de crescimento.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-6xl font-bold text-red-500 mb-2">
                {data.heightCurrent} <span className="text-2xl text-gray-500">cm</span>
              </div>
              <input
                type="range"
                min="100"
                max="220"
                value={data.heightCurrent}
                onChange={(e) => setData({ ...data, heightCurrent: Number(e.target.value) })}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-600"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8 animate-slide-up">
            <div className="text-center">
              <Calendar className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Qual sua idade?</h2>
              <p className="text-gray-400">Importante para definir o fechamento das placas.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-6xl font-bold text-red-500 mb-2">
                {data.age} <span className="text-2xl text-gray-500">anos</span>
              </div>
              <input
                type="range"
                min="10"
                max="40"
                value={data.age}
                onChange={(e) => setData({ ...data, age: Number(e.target.value) })}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-600"
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-8 animate-slide-up">
            <div className="text-center">
              <Users className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Seu Gênero</h2>
              <p className="text-gray-400">Para personalizar os exercícios hormonais.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setData({ ...data, gender: 'male' })}
                className={`p-6 rounded-2xl border-2 transition-all ${
                  data.gender === 'male'
                    ? 'border-red-600 bg-red-900/20 text-white'
                    : 'border-neutral-800 bg-neutral-900 text-gray-500 hover:border-neutral-700'
                }`}
              >
                <span className="block text-xl font-bold">Masculino</span>
              </button>
              <button
                onClick={() => setData({ ...data, gender: 'female' })}
                className={`p-6 rounded-2xl border-2 transition-all ${
                  data.gender === 'female'
                    ? 'border-red-600 bg-red-900/20 text-white'
                    : 'border-neutral-800 bg-neutral-900 text-gray-500 hover:border-neutral-700'
                }`}
              >
                <span className="block text-xl font-bold">Feminino</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={handleNext}
        className="mt-8 w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
      >
        {step === 3 ? 'Finalizar' : 'Próximo'}
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default OnboardingScreen;