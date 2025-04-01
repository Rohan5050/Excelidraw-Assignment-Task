import { RoomCanvas } from "@/components/RoomCanvas";

interface PageProps {
  params: Promise<{ roomId: string }>;
}

export default async function CanvasPage(pageProps: PageProps) {
  const { roomId } = await pageProps.params;
  return <RoomCanvas roomId={roomId} />;
}
