import { RoomCanvas } from "@/components/RoomCanvas";
interface PageProps {
    params: { roomId: string };
}
  
  export default function CanvasPage({ params }: PageProps) {
    return <RoomCanvas roomId={params.roomId} />;
  }
  


/*import { RoomCanvas } from "@/components/RoomCanvas";

type PageProps = {
    params: Promise<{ roomId: string }>
 }

export default async function CanvasPage({ params }: PageProps) {
    const {roomId} =  await params;

    return <RoomCanvas roomId={roomId} />
   
}*/
