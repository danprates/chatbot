import { Message, User } from ".";

export class Session {
  private readonly startedAt: Date;
  private finishedAt?: Date;
  private readonly messages: Message[];
  private waitingForResponse: boolean;
  constructor(private readonly user: User) {
    this.startedAt = new Date();
    this.messages = [];
    this.waitingForResponse = false;
  }

  addMessage(message: Message) {
    this.messages.push(message);
  }

  finish() {
    this.finishedAt = new Date();
  }

  waitForResponse() {
    this.waitingForResponse = true;
  }

  isWaitingForResponse(): boolean {
    return this.waitingForResponse;
  }
}
