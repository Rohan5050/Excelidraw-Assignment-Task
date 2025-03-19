/*import { RoomCanvas } from "@/components/RoomCanvas";

export default async function CanvasPage({ params }: {
    params: {
        roomId: string
    }
}) {
    const roomId = (await params).roomId;

    return <RoomCanvas roomId={roomId} />
   
}*/

import { RoomCanvas } from "@/components/RoomCanvas";

interface PageProps {
  params: { slug: string };
}

export default async function CanvasPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <RoomCanvas roomId={resolvedParams.slug} />;
}
