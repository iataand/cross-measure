"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
  type CurrentConnectionChatStore,
  createCurrentConnectionChatStore,
  initCurrentConnectionChatStore
} from "~/stores/current-connection-chat";

export type CurrentConnectionChatStoreApi = ReturnType<typeof createCurrentConnectionChatStore>;

export const CurrentConnectionChatContext = createContext<
  CurrentConnectionChatStoreApi | undefined
>(undefined);

export interface CurrentConnectionChatStoreProviderProps {
  children: ReactNode;
}

export const CurrentConnectionChatStoreProvider = ({ children }: CurrentConnectionChatStoreProviderProps) => {

  const storeRef = useRef<CurrentConnectionChatStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createCurrentConnectionChatStore(initCurrentConnectionChatStore());
  }

  return (
    <CurrentConnectionChatContext.Provider value={storeRef.current}>
      {children}
    </CurrentConnectionChatContext.Provider>
  );
};

export const useCurrentConnectionChatStore = <T,>(
  selector: (store: CurrentConnectionChatStore) => T,
): T => {
  const currentConnectionChatStoreContext = useContext(CurrentConnectionChatContext);

  if (!currentConnectionChatStoreContext) {
    throw new Error(
      'useCurrentConnectionChatStore must be used within CurrentConnectionChatStoreProvider'
    )
  }

  return useStore(currentConnectionChatStoreContext, selector);
};

