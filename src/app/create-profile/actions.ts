import { profiles } from "@/API";
import { createProfileUseCase } from "@/use-cases/profiles";
import { revalidatePath } from "next/cache";

export default async function createProfileAction(formData: FormData) {
  "use server";
  //to-do consider refactoring this into a dto at this level

  const type = formData.get("type") as profiles;
  const bandName = formData.get("bandName") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;

  //to-do validate data from form

  await createProfileUseCase(
    type,
    bandName || "",
    firstName || "",
    lastName || ""
  );

  revalidatePath("/create-profile");
}
