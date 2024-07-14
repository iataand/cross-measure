"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { profileTypes } from "@/API";
import {
  useCreateProfile,
  useCreateProfileForm,
} from "@/custom-hooks.ts/create-profile";
import SelectProfileType from "./select-profile-type";
import CreateBandProfile from "./band-profile";

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
      <SelectProfileType dispatch={dispatch} />
      {state.profileType === profileTypes.band ? (
        <CreateBandProfile dispatch={dispatch} state={state} />
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
