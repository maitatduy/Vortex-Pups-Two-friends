export const TUNING = {
  maxPaddleForce: 12,
  boatLinearDamping: 0.8,
  boatAngularDamping: 1.2,
  simulatedLatencyMs: 0,
};

export type PaddleInput = {
  dragX: number;
  dragY: number;
  dipping: boolean;
  braking: boolean;
};

export const ROOM_NAME = "boat_room";