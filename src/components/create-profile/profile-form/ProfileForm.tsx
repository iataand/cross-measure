"use client";
import SelectedGenres from "../select-genres/SelectedGenres";
import SelectRoles from "../select-roles/SelectRoles";
import { Country, MusicRoles } from "~/utils/types";
import { profileFormSchema } from "~/utils/schemas/profile-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
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
import { useGenres } from "~/hooks/genres-modal";
import YoutubeEmbed from "~/components/YoutubeEmbed/YoutubeEmbed";
import { collection, addDoc } from "firebase/firestore";
import { db } from "~/lib/configs/firebase-config";

type Props = {
  allCountries: Country[];
  allMusicRoles: MusicRoles;
  allGenres: string[];
};

export default function ProfileForm({
  allCountries,
  allGenres,
  allMusicRoles,
}: Props) {
  const [demoLink, setDemoLink] = useState("");
  const form = useForm<z.output<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      bandName: "",
      email: "",
      bio: "",
      location: "",
      youtubeDemo: "",
      spotifyLink: "",
    },
  });

  const {
    setSearchGenre,
    genres,
    handleSelectGenre,
    selectedGenres,
    handleSave,
    selectedGenresTemp,
  } = useGenres(allGenres);

  async function onSubmit() {
    try {
      await addDoc(collection(db, "users"), {
        ...form.getValues(),
      });
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex w-full max-w-[900px] flex-wrap gap-12">
          <div className="flex min-w-[400px] flex-1 flex-col gap-2">
            <FormField
              control={form.control}
              name="bandName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Band Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
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
            <SelectedGenres
              allGenres={allGenres}
              setSearchGenre={setSearchGenre}
              genres={genres}
              handleSelectGenre={handleSelectGenre}
              selectedGenres={selectedGenres}
              handleSave={handleSave}
              selectedGenresTemp={selectedGenresTemp}
            />
            <SelectRoles allMusicRoles={allMusicRoles} />
          </div>
          <div className="h-[240px] min-w-[400px] flex-1">
            <FormField
              control={form.control}
              name="spotifyLink"
              render={({ field }) => (
                <FormItem className="mb-2 w-full">
                  <FormLabel>Link to your band's Spotify account</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="paste spotify link to your band here"
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
              name="youtubeDemo"
              render={({ field }) => (
                <FormItem className="mb-2 w-full">
                  <FormLabel>Demo Youtube video of your band</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="paste youtube link to your band's demo here"
                      {...field}
                      className="border-gray-700 bg-black"
                      value={demoLink}
                      onChange={(e) => setDemoLink(e.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <YoutubeEmbed embedId={demoLink} />
          </div>
        </div>
        <div className="mt-2 flex justify-center">
          <Button variant="gradient" type="submit" className="w-full max-w-64">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
