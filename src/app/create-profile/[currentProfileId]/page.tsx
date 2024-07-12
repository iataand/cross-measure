"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { profileTypes } from "@/API";
import { Autocomplete } from "@aws-amplify/ui-react";
import CloseIcon from "@mui/icons-material/Close";
import {
  useCreateProfile,
  useCreateProfileForm,
} from "@/custom-hooks.ts/create-profile";

export default function CreateProfile({
  params,
}: {
  params: { currentProfileId: string };
}) {
  const { currentProfileId } = params;

  const { formAction, formRef } = useCreateProfileForm(currentProfileId);
  const { state, dispatch } = useCreateProfile();

  return (
    <form
      action={formAction}
      ref={formRef}
      className="container flex max-w-[864px] flex-col gap-4 border-2 py-4"
    >
      <h1 className="text-center text-3xl">Create Profile</h1>
      <Select
        name="type"
        onValueChange={(value) =>
          dispatch({
            type: "SET_PROFILE_TYPE",
            payload: value as profileTypes,
          })
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a profile type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Profile Type</SelectLabel>
            <SelectItem className="cursor-pointer" value={profileTypes.band}>
              Band
            </SelectItem>
            <SelectItem
              className="cursor-pointer"
              value={profileTypes.musician}
            >
              Musician
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {state.profileType === profileTypes.band ? (
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
        </>
      ) : (
        <>
          <Input name="firstName" placeholder="First Name" />
          <Input name="lastName" placeholder="Last Name" />
        </>
      )}
      <Button type="submit" name="create" variant="outline">
        Create Profile
      </Button>
    </form>
  );
}
