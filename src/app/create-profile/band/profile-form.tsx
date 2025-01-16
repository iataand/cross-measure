"use client";
import { Country, MusicRoles } from "~/utils/types";
import { profileFormSchema } from "~/utils/schemas/profile-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Button } from "~/components/ui/button";

type Props = {
  allCountries: Country[];
  allMusicRoles: MusicRoles;
  allGenres: string[];
};

export default function ProfileForm({ allCountries }: Props) {
  const form = useForm<z.output<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      bandName: "",
      email: "",
      bio: "",
      location: "",
    },
  });

  async function onSubmit() {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex min-w-[400px] flex-1 flex-col gap-2">
          <FormField
            control={form.control}
            name="bandName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Band Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="your bands'name"
                    {...field}
                    className="border-gray-700 bg-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Band Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="your band's email"
                    {...field}
                    className="border-gray-700 bg-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="a few words about your band..."
                    {...field}
                    className="border-gray-700 bg-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Select your country</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full border-gray-700 bg-black">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {allCountries.map((country) => (
                        <SelectItem key={country.id} value={country.name}>
                          {country.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-8 flex justify-center">
          <Button variant="gradient" type="submit" className="w-full max-w-64">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
