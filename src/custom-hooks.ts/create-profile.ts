import { useFormState } from "react-dom";
import createProfileAction from "@/app/create-profile/[currentProfileId]/actions";
import { ChangeEvent, useEffect, useReducer, useRef } from "react";
import { profileTypes } from "@/API";

type Genre = { label: string; id: string };

type State = {
  profileType: profileTypes;
  genres: Genre[];
  currentGenre: string;
  selectedGenres: Genre[];
};

type Action =
  | { type: "SET_PROFILE_TYPE"; payload: profileTypes }
  | { type: "SET_GENRES"; payload: Genre[] }
  | { type: "SET_CURRENT_GENRE"; payload: string }
  | { type: "ADD_SELECTED_GENRE"; payload: Genre }
  | { type: "DELETE_SELECTED_GENRE"; payload: string };

const initialState: State = {
  profileType: profileTypes.musician,
  genres: [],
  currentGenre: "",
  selectedGenres: [],
};

export function reducer(state: State, action: Action) {
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
    default:
      throw new Error("Unkown action type");
  }
}

export function useCreateProfile() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleSelect(option: Genre) {
    dispatch({ type: "ADD_SELECTED_GENRE", payload: option });
  }

  function handleChange(event: ChangeEvent<{ value: string }>) {
    dispatch({ type: "SET_CURRENT_GENRE", payload: event.target.value });
  }

  function handleDeleteGenre(id: string) {
    dispatch({ type: "DELETE_SELECTED_GENRE", payload: id });
  }

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
    handleSelect,
    handleChange,
    handleDeleteGenre,
    setProfileType: (profileType: profileTypes) =>
      dispatch({ type: "SET_PROFILE_TYPE", payload: profileType }),
    setGenres: (genres: Genre[]) =>
      dispatch({ type: "SET_GENRES", payload: genres }),
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
