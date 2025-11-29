import { create } from 'zustand';
import { account } from '../services/appwrite';

interface AuthState {
  user: any | null;
  loading: boolean;
  initialized: boolean;
  login: (email: string, pass: string) => Promise<void>;
  logout: () => Promise<void>;
  checkSession: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  initialized: false,

  login: async (email, password) => {
    set({ loading: true });
    try {
      await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      set({ user, initialized: true });
    } catch (error) {
      console.error(error);
      throw error; // Lança o erro para a UI tratar
    } finally {
      set({ loading: false });
    }
  },

  logout: async () => {
    set({ loading: true });
    try {
      await account.deleteSession('current');
      set({ user: null });
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },

  checkSession: async () => {
    try {
      const user = await account.get();
      set({ user, initialized: true });
    } catch {
      set({ user: null, initialized: true });
    }
  },
}));