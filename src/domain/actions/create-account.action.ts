import { Domain } from "../domain.protocol";
import { Message, Session } from "../entities";

export class CreateAccount implements Domain.Action {
  exec(message: Message, session: Session): string[] {
    return ["Creating account..."];
  }
}
