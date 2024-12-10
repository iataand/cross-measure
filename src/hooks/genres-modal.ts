"use client";

import { useEffect, useState } from "react";

export default function useGenres(allGenres: string[]) {
  const [searchGenre, setSearchGenre] = useState("");
  const [genres, setGenres] = useState(allGenres);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      const filteredGenres = allGenres.filter((genre) =>
        genre.toLowerCase().includes(searchGenre.toLowerCase()),
      );
      setGenres(filteredGenres);
    }, 300);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchGenre]);

  return { searchGenre, genres, setSearchGenre };
}
