import create from "zustand";

interface MainStore {
  darkThemeStatus: boolean;
  count: number;
  toggleTheme: (state: MainStore) => void;
}

export const useStore = create<MainStore>((set) => ({
  darkThemeStatus: true,
  count: 0,
  toggleTheme: () => (set((state) => ({ darkThemeStatus: !state.darkThemeStatus, count: state.count +1 }))),
}));
