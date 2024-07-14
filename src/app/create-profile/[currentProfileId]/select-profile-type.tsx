import { profileTypes } from "@/API";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Action } from "@/custom-hooks.ts/create-profile";
import { Dispatch } from "react";

type SelectProfileProps = {
  dispatch: Dispatch<Action>;
};

export default function SelectProfileType({ dispatch }: SelectProfileProps) {
  return (
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
          <SelectItem className="cursor-pointer" value={profileTypes.musician}>
            Musician
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
