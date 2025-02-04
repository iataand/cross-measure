// src/stores/counter-store.ts
import { createStore } from "zustand/vanilla";

export type CurrentProfileState = {
  currentProfileId: string;
  currentProfileImageUrl: string;
};

export type CurrentProfileActions = {
  setCurrentProfileId: (id: CurrentProfileState["currentProfileId"]) => void;
  setCurrentProfileImageUrl: (
    url: CurrentProfileState["currentProfileImageUrl"],
  ) => void;
};

export type CurrentProfileStore = CurrentProfileState & CurrentProfileActions;

export const initCurrentProfileStore = (): CurrentProfileState => {
  return { currentProfileId: "", currentProfileImageUrl: "" };
};

export const defaultInitState: CurrentProfileState = {
  currentProfileId: "",
  currentProfileImageUrl: "",
};

export const createCurrentProfileStore = (
  initState: CurrentProfileState = defaultInitState,
) => {
  return createStore<CurrentProfileStore>()((set) => ({
    ...initState,
    setCurrentProfileId: (profileId) =>
      set(() => ({ currentProfileId: profileId })),
    setCurrentProfileImageUrl: (url) =>
      set(() => ({ currentProfileImageUrl: url })),
  }));
};
