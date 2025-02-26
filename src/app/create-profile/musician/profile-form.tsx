"use client";

import { musicianFormSchema } from "~/utils/schemas/profile-form-schema";
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
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Button } from "~/components/ui/button";
import { Country } from "~/data-access/countries/get-countries";
import { FixedSizeList } from "react-window";
import { createMusicianProfileAction } from "../_actions/create-profile.action";
import { MusicianProfile } from "~/data-access/profiles/create-band-profile";

type PropTypes = {
  countries: Country[];
  userId: string;
  email: string;
};

export default function ProfileForm(props: PropTypes) {
  const form = useForm<z.output<typeof musicianFormSchema>>({
    resolver: zodResolver(musicianFormSchema),
    defaultValues: {
      musicianName: "",
      email: props.email,
      bio: "",
      location: "",
    },
  });

  const watchCountry = form.watch("location");

  const router = useRouter();

  async function onSubmit() {
    const data = form.getValues() as MusicianProfile;

    const res = await createMusicianProfileAction({
      ...data,
      userId: props.userId,
    });
    if (res.error && res.field) {
      form.setError(res.field, {
        message: res.message,
      });
    }
    router.push(`/dashboard/profile/${props.userId}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex min-w-[400px] flex-1 flex-col gap-2">
          <FormField
            control={form.control}
            name="musicianName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="your name"
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
                    disabled={!!props.email}
                    placeholder="your band's email"
                    {...field}
                    value={props.email}
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
                      <SelectValue>{watchCountry}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <FixedSizeList
                        width={"100%"}
                        height={350}
                        itemCount={props.countries?.length ?? 0}
                        itemSize={40}
                      >
                        {({ index, style }) => (
                          <SelectItem
                            value={props.countries[index]?.name ?? ""}
                            key={props.countries[index]?.id}
                            style={{
                              ...style,
                            }}
                          >
                            {props.countries[index]?.name}
                          </SelectItem>
                        )}
                      </FixedSizeList>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-8 flex justify-center">
          <Button
            variant="gradient"
            type="submit"
            className="w-full max-w-64"
            data-cy="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
