import { RoomCanvas } from "@/components/RoomCanvas";

type tParams = Promise<{ roomId: string}>;

interface PageProps {
  params: tParams;
}

export default async function CanvasPage({ params }: PageProps) {
  const { roomId } = await params;

  return <RoomCanvas roomId={roomId} />;
}