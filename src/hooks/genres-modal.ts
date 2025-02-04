"use client";

import { useEffect, useState } from "react";
import { Genre } from "~/data-access/genres/get-genres";
import updateGenresByProfileId from "~/data-access/genres/update-genres-by-profileId";

export function useGenres(
  allGenres: Genre[],
  profileId: number,
  savedGenres?: string[],
) {
  const [searchGenre, setSearchGenre] = useState("");
  const [genres, setGenres] = useState(allGenres);
  const [selectedGenres, setSelectedGenres] = useState<string[]>(
    savedGenres ?? [],
  );
  const [selectedGenresTemp, setSelectedGenresTemp] =
    useState<string[]>(selectedGenres);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      const filteredGenres = allGenres.filter((genre) =>
        genre.name.toLowerCase().includes(searchGenre.toLowerCase()),
      );
      setGenres(filteredGenres);
    }, 300);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchGenre]);

  useEffect(() => {
    const updateGenres = async () => {
      try {
        await updateGenresByProfileId(profileId, selectedGenres);
      } catch (e) {
        console.error(e);
      }
    };
    if (selectedGenres.length) {
      updateGenres();
    }
  }, [selectedGenres]);

  function handleSelectGenre(genre: string) {
    setSelectedGenresTemp((prevGenres) => {
      if (prevGenres.includes(genre)) {
        return selectedGenresTemp.filter((prevGenre) => prevGenre !== genre);
      }

      return selectedGenresTemp.length < 5
        ? [...prevGenres, genre]
        : [...prevGenres];
    });
  }

  return {
    searchGenre,
    genres,
    setSearchGenre,
    selectedGenres,
    setSelectedGenres,
    handleSelectGenre,
    selectedGenresTemp,
  };
}
