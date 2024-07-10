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
  const {
    genres,
    profileType,
    setProfileType,
    currentGenre,
    handleSelect,
    handleChange,
    handleDeleteGenre,
    selectedGenres,
  } = useCreateProfile();

  return (
    <form
      action={formAction}
      ref={formRef}
      className="container flex max-w-[864px] flex-col gap-4 border-2 py-4"
    >
      <h1 className="text-center text-3xl">Create Profile</h1>
      <Select
        name="type"
        onValueChange={(value) => setProfileType(value as profileTypes)}
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
      {profileType === profileTypes.band ? (
        <>
          <Input name="bandName" placeholder="Band Name" />
          Please select up to 5 genres that best describe your music:
          <Autocomplete
            label="Select up to 5 genres"
            options={genres}
            onSelect={handleSelect}
            value={currentGenre}
            onChange={handleChange}
            disabled={selectedGenres.length >= 5}
          />
          <div className="flex flex-wrap gap-2">
            {selectedGenres.map((genre, index) => (
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
