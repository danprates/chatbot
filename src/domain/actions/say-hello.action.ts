import { Assistant, Message } from "../entities";
import { Domain } from "../domain.protocol";

export class SayHello implements Domain.Action {
  exec(message: Message, assistant: Assistant): string[] {
    return ["Hello, how are you?"];
  }
}
