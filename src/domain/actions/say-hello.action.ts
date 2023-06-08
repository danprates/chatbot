import { Domain } from "../domain.protocol";
import { Message, Session } from "../entities";

export class SayHello implements Domain.Action {
  async exec(
    message: Message,
    session: Session
  ): Promise<{ session: Session; messages: string[] }> {
    return { session, messages: ["Hello, how are you?"] };
  }
}
