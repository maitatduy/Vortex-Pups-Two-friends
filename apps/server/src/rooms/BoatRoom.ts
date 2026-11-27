import { Room, Client, CloseCode } from "colyseus";
import { BoatState, Player } from "./schema/BoatState.js";

export class BoatRoom extends Room<{ state: BoatState }> {
    maxClients = 2;
    state = new BoatState();

    onJoin(client: Client) {
        this.state.players.set(client.sessionId, new Player({ seat: this.state.players.size }));
    }

    onLeave(client: Client, _code: CloseCode) {
        this.state.players.delete(client.sessionId);
    }

    onDrop(client: Client) {
        this.allowReconnection(client, 30).catch(() => {});
    }
}
