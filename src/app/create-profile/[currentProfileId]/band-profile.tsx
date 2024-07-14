"use client";

import { Input } from "@/components/ui/input";
import { Action, State } from "@/custom-hooks.ts/create-profile";
import { Autocomplete } from "@aws-amplify/ui-react";
import CloseIcon from "@mui/icons-material/Close";
import { Dispatch, useEffect } from "react";
import AudioClip from "./audio-clip";
import { Button } from "@/components/ui/button";
import { UploadDataWithPathInput, uploadData } from "aws-amplify/storage";

type CreateBandProfileTypes = {
  dispatch: Dispatch<Action>;
  state: State;
};

export default function CreateBandProfile({
  dispatch,
  state,
}: CreateBandProfileTypes) {
  useEffect(() => {
    console.log(state.file);
  }, [state.file]);

  async function upload() {
    try {
      const result = await uploadData({
        path: "public/test/1.mp3",
        data: state.file as any,
      });
      console.log("Succeeded: ", result);
    } catch (error) {
      console.log("Error : ", error);
    }
  }

  return (
    <>
      <Input name="bandName" placeholder="Band Name" />
      Please select up to 5 genres that best describe your music:
      <Autocomplete
        label="Select up to 5 genres"
        options={state.genres}
        onSelect={(option) =>
          dispatch({ type: "ADD_SELECTED_GENRE", payload: option })
        }
        value={state.currentGenre}
        onChange={(event) =>
          dispatch({
            type: "SET_CURRENT_GENRE",
            payload: event.target.value,
          })
        }
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
              onClick={() =>
                dispatch({
                  type: "DELETE_SELECTED_GENRE",
                  payload: genre.id,
                })
              }
            />
          </span>
        ))}
      </div>
      <Input
        className="cursor-pointer"
        type="file"
        onChange={(event) =>
          dispatch({
            type: "UPLOAD_FILE",
            payload: event.target.files?.[0],
          })
        }
      />
      <Button onClick={() => upload()}>Upload</Button>
      {state.file && <AudioClip audioClip={state.file} />}
    </>
  );
}
