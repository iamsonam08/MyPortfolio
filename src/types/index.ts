export type ThemeMode = 'light' | 'dark' | 'system';

export interface NavItem {
  label: string;
  path: string;
  badge?: string;
}

export interface RouteConfig {
  title: string;
  description: string;
  path: string;
}
