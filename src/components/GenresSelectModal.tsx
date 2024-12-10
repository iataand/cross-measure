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
