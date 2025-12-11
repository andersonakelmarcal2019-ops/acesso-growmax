import React, { useState } from 'react';
import AuthScreen from './components/AuthScreen';
import OnboardingScreen from './components/OnboardingScreen';
import Dashboard from './components/Dashboard';
import { UserData, AppView } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>(AppView.AUTH);
  const [user, setUser] = useState<UserData>({
    username: '',
    heightCurrent: 0,
    heightGoal: 0,
    heightInitial: 0,
    age: 0,
    gender: 'male',
    level: 1,
    xp: 0
  });

  const handleLogin = (username: string) => {
    setUser(prev => ({ ...prev, username }));
    setCurrentView(AppView.ONBOARDING);
  };

  const handleOnboardingComplete = (data: Partial<UserData>) => {
    setUser(prev => ({ ...prev, ...data }));
    setCurrentView(AppView.DASHBOARD);
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans antialiased selection:bg-red-500 selection:text-white">
      {currentView === AppView.AUTH && (
        <AuthScreen onLogin={handleLogin} />
      )}
      
      {currentView === AppView.ONBOARDING && (
        <OnboardingScreen onComplete={handleOnboardingComplete} />
      )}
      
      {currentView === AppView.DASHBOARD && (
        <Dashboard user={user} />
      )}
    </div>
  );
}