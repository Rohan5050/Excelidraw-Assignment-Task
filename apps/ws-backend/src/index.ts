import { WebSocket, WebSocketServer } from 'ws';
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from '@repo/backend-common/config';
import { prismaClient } from "@repo/db/client";

const wss = new WebSocketServer({ port: 8080 });

interface User {
  ws: WebSocket,
  rooms: string[],
  userId: string
}

const users: User[] = [];

function checkUser(token: string): string | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (typeof decoded == "string") {
      return null;
    }

    if (!decoded || !decoded.userId) {
      return null;
    }

    return decoded.userId;
  } catch(e) {
    return null;
  }
  return null;
}

wss.on('connection', function connection(ws, request) {
  const url = request.url;
  if (!url) {
    return;
  }
  const queryParams = new URLSearchParams(url.split('?')[1]);
  const token = queryParams.get('token') || "";
  const userId = checkUser(token);

  if (userId == null) {
    ws.close()
    return null;
  }

  users.push({
    userId,
    rooms: [],
    ws
  })

  ws.on('message', async function message(data) {
    let parsedData;
    if (typeof data !== "string") {
      parsedData = JSON.parse(data.toString());
    } else {
      parsedData = JSON.parse(data);
    }

    if (parsedData.type === "join_room") {
      const user = users.find(x => x.ws === ws);
      user?.rooms.push(parsedData.roomId);
    }

    if (parsedData.type === "leave_room") {
      const user = users.find(x => x.ws === ws);
      if (!user) {
        return;
      }
      user.rooms = user?.rooms.filter(x => x === parsedData.room);
    }

    console.log("message received")
    console.log(parsedData);

    if (parsedData.type === "chat") {
      try {
        const roomId = parsedData.roomId;
        const message = parsedData.message;

        // Verify user exists
        const userExists = await prismaClient.user.findUnique({
          where: { id: userId }
        });

        if (!userExists) {
          ws.send(JSON.stringify({
            type: 'error',
            message: 'User not found'
          }));
          return;
        }

        // Verify room exists
        const roomExists = await prismaClient.room.findUnique({
          where: { id: roomId }
        });

        if (!roomExists) {
          ws.send(JSON.stringify({
            type: 'error',
            message: 'Room not found'
          }));
          return;
        }

        // Create the chat message
        await prismaClient.chat.create({
          data: {
            roomId: Number(roomId),
            message,
            userId
          }
        });

        // Broadcast to users in the room (keeping existing functionality)
        users.forEach(user => {
          if (user.rooms.includes(roomId)) {
            user.ws.send(JSON.stringify({
              type: "chat",
              message: message,
              roomId
            }))
          }
        })
      } catch (error) {
        console.error('Error processing chat message:', error);
        ws.send(JSON.stringify({
          type: 'error',
          message: 'Failed to process message'
        }));
      }
    }
  });
});

