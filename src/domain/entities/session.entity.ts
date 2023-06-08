import { Message, User } from ".";

export class Session {
  private readonly startedAt: Date;
  private finishedAt?: Date;
  private readonly messages: Message[];
  private waitingForResponse: boolean;
  private currentAction?: string;
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

  waitForResponse(currentAction: string) {
    this.waitingForResponse = true;
    this.currentAction = currentAction;
  }

  isWaitingForResponse(): boolean {
    return this.waitingForResponse;
  }

  getLastAction(): string {
    if (!this.waitingForResponse)
      throw new Error("This session is not waiting for response");

    if (!this.currentAction)
      throw new Error("There's no last action registered");

    return this.currentAction;
  }
}
