import create from 'zustand';

interface MainStore {
  darkThemeStatus: boolean;
  count: number;
  fakeData: null | string;
  toggleTheme: () => void;
  getFakeData: () => void;
}

export const useStore = create<MainStore>((set) => ({
  darkThemeStatus: true,
  count: 0,
  fakeData: null,
  toggleTheme: () =>
    set((state) => ({
      darkThemeStatus: !state.darkThemeStatus,
      count: state.count + 1,
    })),
  getFakeData: async () => {
    const random = Math.floor(Math.random() * 50);
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${random}`
    );
    const { title: fakeData } = await res.json();
    set((state) => ({
      ...state,
      fakeData,
    }));
  },
}));
