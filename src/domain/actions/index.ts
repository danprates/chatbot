import { Domain } from "../domain.protocol";
import { SayHello } from "./say-hello.action";
import { SayGoodBye } from "./say-good-bye.action";
import { CreateAccount } from "./create-account.action";

export const makeActions = (): Map<string, Domain.Action> => {
  const actions = new Map();
  actions.set("greeting", new SayHello());
  actions.set("goodbye", new SayGoodBye());
  actions.set("createAccount", new CreateAccount());
  return actions;
};
