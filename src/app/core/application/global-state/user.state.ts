import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {ILoginResponseUser } from "@/app/core/application/dto/loginResponseSuccess.dto";

interface IUser{
    token:string,
    user: ILoginResponseUser
}
interface UserState {
    user: IUser | null;
    setUser: (user: IUser | null) => void;
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