import { RoomCanvas } from "@/components/RoomCanvas";

interface PageProps {
  // Allow params to be either a plain object or a Promise that resolves to the object.
  params: { roomId: string } | Promise<{ roomId: string }>;
}

export default async function CanvasPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <RoomCanvas roomId={resolvedParams.roomId} />;
}
