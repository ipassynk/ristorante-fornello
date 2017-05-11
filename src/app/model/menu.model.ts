export type MenuCategory = 'Sandwiches & Wraps' | 'Starters' | 'Salads';

export interface MenuItem {
  code: string;
  category: MenuCategory;
  name: string;
  description: string;
  calories: number;
  price: number;
}
