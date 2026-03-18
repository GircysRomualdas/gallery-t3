import FullPageImageView from "~/components/full-imagepage";

export default function PhotoModal({ params }: { params: { id: string } }) {
  const idAsNumber = Number(params.id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  return (
    <div className="flex h-full min-h-0 w-full min-w-0 overflow-y-hidden">
      <FullPageImageView id={idAsNumber} />
    </div>
  );
}
