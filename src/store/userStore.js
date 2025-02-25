import { create } from 'zustand'

export const useUserStore = create((set) => ({
    weightStore: 0,
    setWeightStore: (newWeight) => set(() => ({ weight: newWeight }))
}));
