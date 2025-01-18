import { z } from "zod";
import { BandProfile } from "~/data-access/users/create-band-profile";

export const profileFormSchema = z.object({
  bandName: z.string().trim().min(1, {
    message: "Band name is required.",
  }),
  email: z.string().trim().email({
    message: "Invalid email address.",
  }),
  bio: z.string().trim().min(3, {
    message: "Bio is required.",
  }),
  location: z.string().trim().min(1, { message: "Country is required." }),
});
