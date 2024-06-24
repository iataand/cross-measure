"use server";

import { CreateProfileInput, profileTypes } from "@/API";
import { createProfileUseCase } from "@/use-cases/profiles";
import { revalidatePath } from "next/cache";
import z, { ZodError } from "zod";

const profileTypeEnum = z.enum(["band", "musician"]);

const schema = z.discriminatedUnion("type", [
  z.object({
    type: profileTypeEnum.extract(["band"]),
    bandName: z
      .string()
      .trim()
      .min(3, { message: "Band Name should contain at least 3 letters" })
      .max(30, { message: "Band Name is too long" }),
  }),
  z.object({
    type: profileTypeEnum.extract(["musician"]),
    firstName: z
      .string()
      .trim()
      .min(3, { message: "First name should contain at least 3 letters" })
      .max(30, { message: "First name is too long" }),
    lastName: z
      .string()
      .trim()
      .min(3, { message: "Last name should contain at least 3 letters" })
      .max(30, { message: "Last name is too long" }),
  }),
]);

type Fields = {
  type: profileTypes;
  bandName?: string;
  firstName?: string;
  lastName?: string;
};

export type FormStatus = {
  message: string;
  errors: Record<keyof Fields, string> | undefined;
  fieldValues: Fields;
};

export default async function createProfileAction(
  formStatus: FormStatus,
  formData: FormData,
) {
  const type = formData.get("type") as profileTypes;
  const bandName = formData.get("bandName") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;

  try {
    const profileData: CreateProfileInput = {
      type,
      bandName,
      firstName,
      lastName,
    };

    schema.parse(profileData);

    await createProfileUseCase(type, firstName ?? "", lastName ?? "");
    revalidatePath("/create-profile");

    return {
      message: "success",
      errors: undefined,
      fieldValues: {
        type: profileTypes.band,
        bandName: "",
        firstName: "",
        lastName: "",
      },
    };
  } catch (error) {
    const zodError = error as ZodError;
    const errorMap = zodError.flatten().fieldErrors;

    return {
      message: "error",
      errors: {
        type: errorMap["type"]?.[0] ?? "",
        bandName: errorMap["bandName"]?.[0] ?? "",
        firstName: errorMap["firstName"]?.[0] ?? "",
        lastName: errorMap["lastName"]?.[0] ?? "",
      },
      fieldValues: {
        type: profileTypes.band,
        firstName: "",
        lastName: "",
        bandName: "",
      },
    };
  }
}
