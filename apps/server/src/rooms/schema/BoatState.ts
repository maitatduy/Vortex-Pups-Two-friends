import { schema, t, type SchemaType } from "@colyseus/schema";

export const Player = schema({
    seat: t.uint8(),
});
export type Player = SchemaType<typeof Player>;

export const BoatState = schema({
    players: t.map(Player),
});
export type BoatState = SchemaType<typeof BoatState>;
