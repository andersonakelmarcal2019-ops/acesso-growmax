export interface UserData {
  username?: string;
  heightCurrent: number;
  heightGoal: number;
  heightInitial: number;
  age: number;
  gender: 'male' | 'female' | 'other';
  level: number;
  xp: number;
}

export interface DailyTask {
  id: string;
  title: string;
  completed: boolean;
  type: 'water' | 'stretch' | 'diet' | 'sleep';
}

export enum AppView {
  AUTH = 'auth',
  ONBOARDING = 'onboarding',
  DASHBOARD = 'dashboard'
}

export enum TabView {
  HOME = 'home',
  DIET = 'diet',
  WORKOUT = 'workout',
  AI = 'ai'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  sources?: string[];
}