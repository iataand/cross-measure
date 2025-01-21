"use client";

import { useEffect, useState } from "react";
import { Genre } from "~/data-access/genres/get-genres";

export function useGenres(allGenres: Genre[]) {
  const [searchGenre, setSearchGenre] = useState("");
  const [genres, setGenres] = useState(allGenres);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
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

  function handleSave() {
    setSelectedGenres(selectedGenresTemp);
  }

  return {
    searchGenre,
    genres,
    setSearchGenre,
    selectedGenres,
    setSelectedGenres,
    handleSelectGenre,
    handleSave,
    selectedGenresTemp,
  };
}
