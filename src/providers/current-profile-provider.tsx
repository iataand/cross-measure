// src/providers/counter-store-provider.tsx
"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
  type CurrentProfileStore,
  createCurrentProfileStore,
  initCurrentProfileStore,
} from "~/stores/current-profile";

export type CurrentProfileStoreApi = ReturnType<
  typeof createCurrentProfileStore
>;

export const CurrentProfileStoreContext = createContext<
  CurrentProfileStoreApi | undefined
>(undefined);

export interface CurrentProfileStoreProviderProps {
  children: ReactNode;
}

export const CurrentProfileStoreProvider = ({
  children,
}: CurrentProfileStoreProviderProps) => {
  const storeRef = useRef<CurrentProfileStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createCurrentProfileStore(initCurrentProfileStore());
  }

  return (
    <CurrentProfileStoreContext.Provider value={storeRef.current}>
      {children}
    </CurrentProfileStoreContext.Provider>
  );
};

export const useCurrentProfileStore = <T,>(
  selector: (store: CurrentProfileStore) => T,
): T => {
  const currentProfileStoreContext = useContext(CurrentProfileStoreContext);

  if (!currentProfileStoreContext) {
    throw new Error(
      `useCurrentProfileStore must be used within CurrentProfileStoreProvider`,
    );
  }

  return useStore(currentProfileStoreContext, selector);
};
