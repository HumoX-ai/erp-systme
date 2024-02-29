import create from "zustand";
import { persist } from "zustand/middleware";
import Cookies from "js-cookie";
import { AuthPersistType, AuthStoreType } from "../../types";

const userInitialState = {
  id: "",
  name: "",
  avatar: "",
  role: "",
  email: "",
};

export const useAuthStore = create<AuthStoreType>(
  (persist as AuthPersistType)(
    (set) => ({
      session: {
        signedIn: false,
        theme: "light",
      },
      user: userInitialState,
      setUser: (value) => set(() => ({ user: value })),
      onSignInSuccess: (user) =>
        set(() => ({
          user: user,
          session: {
            signedIn: true,
            theme: "light",
          },
        })),
      onSignOutSuccess: () =>
        set(() => {
          Cookies.remove("accessToken");

          return {
            user: userInitialState,
            session: {
              theme: "light",
              signedIn: false,
            },
          };
        }),
      setToken: ({ signedIn, theme }) =>
        set(() => {
          return {
            session: {
              theme: theme,
              signedIn: signedIn,
            },
          };
        }),
    }),
    {
      name: "auth",
    }
  )
);

export default userInitialState;
