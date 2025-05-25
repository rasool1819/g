import { BarChart3, History, Calendar, TrendingUp, Activity, MessageCircle, HelpCircle, Settings } from 'lucide-react';

export const navigationGeneralItems = [
  { icon: BarChart3, label: 'Dashboard', active: true },
  { icon: History, label: 'History' },
  { icon: Calendar, label: 'Calendar' },
  { icon: Calendar, label: 'Appointments' },
  { icon: TrendingUp, label: 'Statistics' },
  { icon: Activity, label: 'Tests' }
];

export const navigationToolItems = [
  { icon: MessageCircle, label: 'Chat' },
  { icon: HelpCircle, label: 'Support' }
];

export const settingsItem = [
  { icon: Settings, label: 'Settings' }
];