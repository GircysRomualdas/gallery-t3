import { Modal } from "./modal";
import FullPageImageView from "~/components/full-imagepage";

export default function PhotoModal({ params }: { params: { id: string } }) {
  const idAsNumber = Number(params.id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  return (
    <Modal>
      <FullPageImageView id={idAsNumber} />
    </Modal>
  );
}
