import * as Dialog from "@radix-ui/react-dialog";
import { IconPlus, IconX } from "@tabler/icons-react";
import GenresModal from "./GenresModal";

export default function GenresSelectModal({
  allGenres,
}: {
  allGenres: string[];
}) {
  return (
    <>
      <GenresModal allGenres={allGenres}></GenresModal>
      selected genres will be here
    </>
  );
}
