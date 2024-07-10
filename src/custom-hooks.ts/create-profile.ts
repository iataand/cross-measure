import { useFormState } from "react-dom";
import createProfileAction from "@/app/create-profile/[currentProfileId]/actions";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { profileTypes } from "@/API";

type Genre = { label: string; id: string };

export function useCreateProfile() {
  const [profileType, setProfileType] = useState<profileTypes>(
    profileTypes.musician,
  );
  const [genres, setGenres] = useState<Genre[]>([]);
  const [currentGenre, setCurrentGenre] = useState<string>("");
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);

  function handleSelect(option: Genre) {
    setSelectedGenres([...selectedGenres, option]);
    setCurrentGenre("");
  }

  function handleChange(event: ChangeEvent<{ value: string }>) {
    setCurrentGenre(event.target.value);
  }

  function handleDeleteGenre(id: string) {
    const deleteGenreAtIndex = selectedGenres.findIndex(
      (genre) => genre.id === id,
    );

    const tempSelectedGenres = [...selectedGenres];
    tempSelectedGenres.splice(deleteGenreAtIndex, 1);

    setSelectedGenres(tempSelectedGenres);
  }

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3000/api/get-music-genres");
        const genres = await res.json();
        setGenres(
          genres.map((genre: string, index: number) => ({
            label: genre,
            id: `${index}-${genre}`,
          })),
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return {
    genres,
    setGenres,
    profileType,
    setProfileType,
    currentGenre,
    setCurrentGenre,
    handleSelect,
    handleChange,
    handleDeleteGenre,
    selectedGenres,
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
