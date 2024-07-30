"use client";

import { Input } from "@/components/ui/input";
import { Action, State } from "@/custom-hooks.ts/create-profile";
import { Autocomplete, ComboBoxOption } from "@aws-amplify/ui-react";
import CloseIcon from "@mui/icons-material/Close";
import { Dispatch, useEffect } from "react";

type CreateBandProfileTypes = {
  dispatch: Dispatch<Action>;
  state: State;
};

export default function CreateBandProfile({
  dispatch,
  state,
}: CreateBandProfileTypes) {
  function handleAddGenre(option: ComboBoxOption) {
    dispatch({ type: "ADD_SELECTED_GENRE", payload: option });
  }

  function handleCurrentGenre(event: any) {
    dispatch({
      type: "SET_CURRENT_GENRE",
      payload: event.target.value,
    });
  }

  function handleDeleteGenre(id: string) {
    dispatch({
      type: "DELETE_SELECTED_GENRE",
      payload: id,
    });
  }

  function handleAudioUpload(event: any) {
    if (!event.target.files[0]) {
      return;
      //add toast with error
    }

    dispatch({
      type: "UPLOAD_FILE",
      payload: [...state.files, event.target.files?.[0]],
    });
  }

  return (
    <>
      <Input name="bandName" placeholder="Band Name" />
      Please select up to 5 genres that best describe your music:
      <Autocomplete
        label="Select up to 5 genres"
        options={state.genres}
        onSelect={handleAddGenre}
        value={state.currentGenre}
        onChange={handleCurrentGenre}
        disabled={state.selectedGenres.length >= 5}
      />
      <div className="flex flex-wrap gap-2">
        {state.selectedGenres.map((genre, index) => (
          <span
            className="rounded-2xl border-2 p-2"
            key={`${genre.id}-${index}`}
          >
            {genre.label}{" "}
            <CloseIcon
              className="cursor-pointer"
              fontSize="small"
              onClick={() => handleDeleteGenre(genre.id)}
            />
          </span>
        ))}
      </div>
      Please select 3 audio demos of your band:
      {[0, 1, 2].map(() => (
        <div className="flex w-full items-center gap-2">
          <Input
            className="w-1/2 cursor-pointer"
            type="file"
            onChange={handleAudioUpload}
          />
          <audio controls className="h-10 w-full">
            <source src="https://crossmeasure17003eb82fd84b2d81e511c1633035fe99ec2-dev.s3.eu-central-1.amazonaws.com/public/audio-clips/cali.mp3" />
          </audio>
        </div>
      ))}
    </>
  );
}
