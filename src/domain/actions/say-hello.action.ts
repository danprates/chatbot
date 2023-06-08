import { Domain } from "../domain.protocol";
import { Message, Session } from "../entities";

export class SayHello implements Domain.Action {
  exec(message: Message, session: Session): string[] {
    return ["Hello, how are you?"];
  }
}
