import React, { useState } from 'react';
import { UserData, TabView } from '../types';
import HomeTab from './HomeTab';
import DietTab from './DietTab';
import WorkoutTab from './WorkoutTab';
import AIAssistant from './AIAssistant';
import { LayoutDashboard, Utensils, Dumbbell, Sparkles } from 'lucide-react';

interface DashboardProps {
  user: UserData;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState<TabView>(TabView.HOME);

  const renderContent = () => {
    switch (activeTab) {
      case TabView.HOME:
        return <HomeTab user={user} />;
      case TabView.DIET:
        return <DietTab />;
      case TabView.WORKOUT:
        return <WorkoutTab />;
      case TabView.AI:
        return <AIAssistant />;
      default:
        return <HomeTab user={user} />;
    }
  };

  const NavButton = ({ tab, icon: Icon, label }: { tab: TabView; icon: any; label: string }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`relative p-3 rounded-full transition-all duration-300 flex items-center justify-center ${
        activeTab === tab
          ? 'text-white bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)] scale-110'
          : 'text-gray-500 hover:text-gray-300 hover:bg-neutral-800'
      }`}
    >
      <Icon size={24} />
      {activeTab === tab && (
        <span className="absolute -top-10 bg-neutral-800 text-xs px-2 py-1 rounded-md border border-neutral-700 animate-fade-in whitespace-nowrap z-50">
          {label}
        </span>
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col animate-fade-in">
      <div className="max-w-md mx-auto w-full min-h-screen flex flex-col relative">
        {/* Header */}
        <div className="pt-8 px-6 pb-4 flex justify-between items-center bg-black/80 backdrop-blur-md sticky top-0 z-20 border-b border-neutral-900">
          <div>
             <h1 className="text-xl font-bold tracking-tight text-white">
               Grow <span className="text-red-500">Max</span>
             </h1>
             <p className="text-xs text-gray-500">Bem-vindo, <span className="text-red-500 font-semibold">{user.username || 'Atleta'}</span></p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-800 flex items-center justify-center text-red-500 font-bold shadow-inner">
            {user.username ? user.username.charAt(0).toUpperCase() : 'U'}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-y-auto scrollbar-hide">
          {renderContent()}
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[calc(100%-3rem)] max-w-[400px] z-30">
          <div className="bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-full p-2 flex justify-between items-center shadow-2xl shadow-black">
            <NavButton tab={TabView.HOME} icon={LayoutDashboard} label="Início" />
            <NavButton tab={TabView.DIET} icon={Utensils} label="Dieta" />
            <NavButton tab={TabView.WORKOUT} icon={Dumbbell} label="Treino" />
            <NavButton tab={TabView.AI} icon={Sparkles} label="IA" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;