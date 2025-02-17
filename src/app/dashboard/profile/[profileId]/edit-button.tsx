"use client";

import { IconEdit, IconX } from "@tabler/icons-react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "~/firebase";
import * as Dialog from "@radix-ui/react-dialog";
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
import { BandProfile } from "~/data-access/profiles/create-band-profile";
import { editBandProfileAction } from "./_actions/edit-band-profile.action";
import { Country } from "~/data-access/countries/get-countries";
import { FixedSizeList } from "react-window";
import { Button } from "~/components/ui/button";

type PropTypes = {
  bandName: string;
  bio: string;
  currentProfileId: string;
  countries: Country[];
  location: string;
  email: string;
};

export function EditButton(props: PropTypes) {
  const [user] = useAuthState(auth);

  const form = useForm<z.output<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      bandName: props.bandName,
      email: props.email,
      bio: props.bio,
      location: props.location,
    },
  });

  const watchCountry = form.watch("location");

  async function onSubmit() {
    const data = form.getValues() as BandProfile;

    try {
      await editBandProfileAction(data, props.currentProfileId);
    } catch (e) {
      console.error(e);
    }
  }

  if (user?.uid === props.currentProfileId) {
    return (
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <IconEdit className="absolute left-[calc(100%-35px)] top-2 cursor-pointer" />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/50" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-1/2 top-1/2 flex h-[100vh] w-[100dvw] -translate-x-1/2 -translate-y-1/2 flex-col gap-6 rounded-md bg-[#111418] p-12 text-center text-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none md:max-h-[600px] md:max-w-[650px]">
            <Dialog.Title className="m-0 text-3xl font-medium">
              Edit profile
            </Dialog.Title>
            <Dialog.Description />
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
                <Button
                  variant="gradient"
                  type="submit"
                  className="mt-8 w-full max-w-64"
                >
                  Save
                </Button>
              </form>
            </Form>
            <Dialog.Close asChild>
              <IconX className="absolute right-2.5 top-2.5 inline-flex size-[25px] cursor-pointer appearance-none items-center justify-center rounded-full hover:bg-gray-50/10 focus:shadow-[0_0_0_2px] focus:outline-none" />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  }

  return <></>;
}
