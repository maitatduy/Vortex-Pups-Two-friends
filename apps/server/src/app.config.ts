import { defineServer, defineRoom, monitor, playground } from "colyseus";
import { ROOM_NAME } from "@vortex-pups-two-friends/shared";
import { BoatRoom } from "./rooms/BoatRoom.js";

const server = defineServer({
    rooms: {
        [ROOM_NAME]: defineRoom(BoatRoom),
    },

    express: (app) => {
        if (process.env.NODE_ENV !== "production") {
            app.use("/monitor", monitor());
            app.use("/playground", playground());
        }
    },
});

export default server;

/** Named export read by the `colyseus/vite` plugin's `serverEntry`. */
export { server };
