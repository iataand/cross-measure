import { uploadData } from "aws-amplify/storage";

export async function uploadFile() {
  try {
    const result = await uploadData({
      path: "public/album/2024/1.jpg",
      // Alternatively, path: ({identityId}) => `protected/${identityId}/album/2024/1.jpg`
      data: file,
    }).result;
    console.log("Succeeded: ", result);
  } catch (error) {
    console.log("Error : ", error);
  }
}
