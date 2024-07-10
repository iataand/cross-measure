import { getProfileById } from "@/data-access/profiles";
import { getCurrentProfile } from "@/data-access/user-details";

export async function isAuthenticated() {
  let user;
  try {
    user = await getCurrentProfile();
  } catch (error) {
    console.log(error);

    return false;
  }
  const profile = await getProfileById(user.userId);
}
