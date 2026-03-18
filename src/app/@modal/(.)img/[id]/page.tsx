import { Modal } from "./modal";
import FullPageImageView from "~/components/full-imagepage";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Modal>
      <FullPageImageView photoId={id} />
    </Modal>
  );
}
