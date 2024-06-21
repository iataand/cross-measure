import { Button } from "@/components/ui/button";
import createProfileAction from "./actions";
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

export default function CreateProfile() {
  return (
    <form
      action={createProfileAction}
      className="container flex flex-col gap-4 border-2 py-4"
    >
      <Select name="type">
        <SelectTrigger>
          <SelectValue placeholder="Select a profile type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Profile Type</SelectLabel>
            <SelectItem value="band">Band</SelectItem>
            <SelectItem value="musician">Musician</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input name="bandName" placeholder="Band Name" />
      <Input name="firstName" placeholder="First Name" />
      <Input name="lastName" placeholder="Last Name" />
      <Button type="submit" name="create" variant="outline">
        Create Profile
      </Button>
    </form>
  );
}
