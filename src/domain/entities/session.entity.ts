import { Message, User } from ".";

export class Session {
  private readonly startedAt: Date;
  private finishedAt?: Date;
  private readonly messages: Message[];
  constructor(private readonly user: User) {
    this.startedAt = new Date();
    this.messages = [];
  }

  addMessage(message: Message) {
    this.messages.push(message);
  }

  finish() {
    this.finishedAt = new Date();
  }
}
