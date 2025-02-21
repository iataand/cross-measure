import { createStore } from "zustand/vanilla";
import { BandProfile } from "~/data-access/profiles/create-band-profile";

export type CurrentConnectionChatState = {
  currentConnection: {
    profile: BandProfile | null;
    isAccepted: boolean;
    id: number;
  };
};

export type CurrentProfileActions = {
  setCurrentProfileChat: (
    currentConnection: CurrentConnectionChatState["currentConnection"],
  ) => void;
};

export type CurrentConnectionChatStore = CurrentConnectionChatState &
  CurrentProfileActions;

export const initCurrentConnectionChatStore =
  (): CurrentConnectionChatState => {
    return { currentConnection: { profile: null, isAccepted: true, id: -1 } };
  };

export const defaultInitState: CurrentConnectionChatState = {
  currentConnection: { profile: null, isAccepted: true, id: -1 },
};

export const createCurrentConnectionChatStore = (
  initState: CurrentConnectionChatState = defaultInitState,
) => {
  return createStore<CurrentConnectionChatStore>()((set) => ({
    ...initState,
    setCurrentProfileChat: (currentConnection) =>
      set(() => ({ currentConnection })),
  }));
};
