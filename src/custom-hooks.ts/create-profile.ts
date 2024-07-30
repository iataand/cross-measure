import { useFormState } from "react-dom";
import createProfileAction from "@/app/create-profile/[currentProfileId]/actions";
import { useEffect, useReducer, useRef } from "react";
import { profileTypes } from "@/API";

type Genre = { label: string; id: string };

export type State = {
  profileType: profileTypes;
  genres: Genre[];
  currentGenre: string;
  selectedGenres: Genre[];
  files: File[];
};

export type Action =
  | { type: "SET_PROFILE_TYPE"; payload: profileTypes }
  | { type: "SET_GENRES"; payload: Genre[] }
  | { type: "SET_CURRENT_GENRE"; payload: string }
  | { type: "ADD_SELECTED_GENRE"; payload: Genre }
  | { type: "DELETE_SELECTED_GENRE"; payload: string }
  | { type: "UPLOAD_FILE"; payload: File[] };

const initialState: State = {
  profileType: profileTypes.musician,
  genres: [],
  currentGenre: "",
  selectedGenres: [],
  files: [],
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_PROFILE_TYPE":
      return { ...state, profileType: action.payload };
    case "SET_GENRES":
      return { ...state, genres: action.payload };
    case "SET_CURRENT_GENRE":
      return { ...state, currentGenre: action.payload };
    case "ADD_SELECTED_GENRE":
      return {
        ...state,
        selectedGenres: [...state.selectedGenres, action.payload],
        currentGenre: "",
      };
    case "DELETE_SELECTED_GENRE":
      return {
        ...state,
        selectedGenres: state.selectedGenres.filter(
          (genre) => genre.id !== action.payload,
        ),
      };
    case "UPLOAD_FILE":
      return { ...state, files: action.payload };
    default:
      throw new Error("Unkown action type");
  }
}

export function useCreateProfile() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3000/api/get-music-genres");
        const genres = await res.json();
        const formattedGenres = genres.map((genre: string, index: number) => ({
          label: genre,
          id: `${index}-${genre}`,
        }));
        dispatch({ type: "SET_GENRES", payload: formattedGenres });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return {
    state,
    dispatch,
  };
}

const defaultFormValues = {
  message: "",
  errors: undefined,
  fieldValues: {
    type: profileTypes.band,
    firstName: "",
    lastName: "",
    bandName: "",
  },
};

export function useCreateProfileForm(currentProfileId: string) {
  const [formState, formAction] = useFormState(
    createProfileAction.bind(null, currentProfileId),
    defaultFormValues,
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formState.message === "success") {
      formRef.current?.reset();
    }
  }, [formState]);

  return { formState, formAction, formRef };
}
