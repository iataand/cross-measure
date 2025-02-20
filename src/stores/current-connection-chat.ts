import { createStore } from "zustand/vanilla";
import { BandProfile } from "~/data-access/profiles/create-band-profile";

export type CurrentConnectionChatState = {
  connection: {
    profile: BandProfile | null;
    isAccepted: boolean;
    id: number;
  };
};

export type CurrentProfileActions = {
  setCurrentProfileChat: (
    connection: CurrentConnectionChatState["connection"],
  ) => void;
};

export type CurrentConnectionChatStore = CurrentConnectionChatState &
  CurrentProfileActions;

export const initCurrentConnectionChatStore =
  (): CurrentConnectionChatState => {
    return { connection: { profile: null, isAccepted: true, id: -1 } };
  };

export const defaultInitState: CurrentConnectionChatState = {
  connection: { profile: null, isAccepted: true, id: -1 },
};

export const createCurrentConnectionChatStore = (
  initState: CurrentConnectionChatState = defaultInitState,
) => {
  return createStore<CurrentConnectionChatStore>()((set) => ({
    ...initState,
    setCurrentProfileChat: (connection) => set(() => ({ connection })),
  }));
};
