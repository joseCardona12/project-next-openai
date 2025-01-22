import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { IAuthUser } from "@/app/core/application/dto/loginResponseSuccess.dto";

interface UserState {
    user: IAuthUser | null;
    setUser: (user: IAuthUser | null) => void;
    removeUser: () => void;
};

export const useUserState = create<UserState>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user) => set({ user }),
            removeUser: () => set({ user: null }),
        }),
        {
            name: 'user-storage',
        }
    )
);