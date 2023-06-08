import { Domain } from "../domain.protocol";
import { SayHello } from "./say-hello.action";
import { SayGoodBye } from "./say-good-bye.action";

export const makeActions = (): Map<string, Domain.Action> => {
  const actions = new Map();
  actions.set("greeting", new SayHello());
  actions.set("goodbye", new SayGoodBye());
  return actions;
};
