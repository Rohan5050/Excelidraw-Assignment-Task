import { RoomCanvas } from "@/components/RoomCanvas";

interface PageProps {
  params: { roomId: string }; // Type matches route parameter
}

export default function CanvasPage({ params }: PageProps) {
  // Direct access to slug parameter
  return <RoomCanvas roomId={params.roomId} />;
}