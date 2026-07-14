import React, { useState } from 'react';
import { UserData, DailyTask } from '../types';
import { Lock, CheckCircle, Circle } from 'lucide-react';

interface HomeTabProps {
  user: UserData;
}

const HomeTab: React.FC<HomeTabProps> = ({ user }) => {
  const [tasks, setTasks] = useState<DailyTask[]>([
    { id: '1', title: 'Beber 3 litros de água', completed: false, type: 'water' },
    { id: '2', title: 'Alongamento matinal (10 min)', completed: false, type: 'stretch' },
    { id: '3', title: 'Alongamento noturno (10 min)', completed: false, type: 'stretch' },
    { id: '4', title: 'Seguir dieta básica', completed: false, type: 'diet' },
    { id: '5', title: 'Dormir 8h por noite', completed: false, type: 'sleep' },
  ]);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const progress = (tasks.filter(t => t.completed).length / tasks.length) * 100;

  return (
    <div className="space-y-6 pb-24">
      {/* Height Stats Card */}
      <div className="bg-neutral-900 rounded-3xl p-6 border border-neutral-800">
        <h3 className="text-white font-bold mb-6 text-lg">Atualização de Altura</h3>
        <div className="flex justify-around items-end text-center">
          <div>
            <p className="text-gray-500 text-sm mb-1">Inicial</p>
            <p className="text-gray-300 font-bold text-2xl">{user.heightInitial}cm</p>
          </div>
          <div className="w-px h-12 bg-neutral-800"></div>
          <div>
            <p className="text-gray-500 text-sm mb-1">Meta</p>
            <p className="text-red-500 font-bold text-2xl">{user.heightGoal}cm</p>
          </div>
        </div>
      </div>

      {/* Level Progress Card */}
      <div className="bg-neutral-900 rounded-3xl p-6 border border-neutral-800">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-red-500 font-bold mb-1">Nível {user.level}:</p>
            <h3 className="text-white font-bold text-lg">Fundação <span className="text-gray-500 font-normal text-sm">Postura e Mobilidade</span></h3>
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-xs">Dias válidos</p>
            <p className="text-white font-bold">1 <span className="text-gray-500 text-sm">/ 30</span></p>
          </div>
        </div>
        
        <div className="mb-2 flex justify-between text-xs font-semibold">
          <span className="text-gray-400">Progresso do Nível {user.level}</span>
          <span className="text-red-500">3%</span>
        </div>
        <div className="w-full bg-neutral-800 rounded-full h-2 mb-3">
          <div className="bg-gradient-to-r from-red-800 to-red-500 h-2 rounded-full w-[3%]"></div>
        </div>
        <p className="text-gray-600 text-xs text-center">
          1 de 30 dias válidos para o próximo nível
        </p>
      </div>

      {/* Daily Progress */}
      <div className="bg-neutral-900 rounded-3xl p-6 border border-neutral-800">
        <div className="flex justify-between text-sm font-semibold mb-2">
          <span className="text-gray-300">Progresso Diário</span>
          <span className="text-red-500">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-neutral-800 rounded-full h-3 mb-6">
          <div 
            className="bg-red-600 h-3 rounded-full transition-all duration-500" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-gray-500 text-xs text-center">
          Complete todas as tarefas para salvar o dia
        </p>
      </div>

      {/* Tasks List */}
      <div>
        <h3 className="text-white font-bold mb-4 flex items-center gap-2">
          <span className="text-red-500">↗</span> Tarefas de Hoje
        </h3>
        <div className="space-y-3">
          {tasks.map((task) => (
            <div 
              key={task.id} 
              onClick={() => toggleTask(task.id)}
              className={`p-4 rounded-2xl border flex items-center gap-4 cursor-pointer transition-all ${
                task.completed 
                  ? 'bg-red-900/10 border-red-900/30' 
                  : 'bg-neutral-900 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {task.completed ? (
                <CheckCircle className="text-red-500 w-6 h-6 shrink-0" />
              ) : (
                <Circle className="text-gray-600 w-6 h-6 shrink-0" />
              )}
              <span className={`text-sm font-medium ${task.completed ? 'text-gray-300 line-through' : 'text-gray-400'}`}>
                {task.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Day Validation Lock */}
      <div className="bg-neutral-900 rounded-3xl p-8 border border-neutral-800 text-center relative overflow-hidden">
        {progress === 100 ? (
           <>
            <div className="absolute inset-0 bg-red-900/20 blur-xl"></div>
            <div className="relative z-10">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h3 className="text-white font-bold mb-1">Dia Validado!</h3>
              <p className="text-gray-500 text-sm">Bom descanso. Você voltará amanhã às 00:00.</p>
            </div>
           </>
        ) : (
          <div className="relative z-10 opacity-60">
            <Lock className="w-12 h-12 text-red-500 mx-auto mb-3" />
            <h3 className="text-white font-bold mb-1">Dia não validado</h3>
            <p className="text-gray-500 text-sm">Complete as tarefas para desbloquear.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeTab;