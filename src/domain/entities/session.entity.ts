import { Message, User } from ".";

export class Session {
  private readonly startedAt: Date;
  private finishedAt?: Date;
  private readonly messages: Message[];
  private waitingForReply: boolean;
  private currentAction?: string;
  private currentStep?: string;
  private variables: Record<string, any> = {};
  constructor(readonly user: User) {
    this.startedAt = new Date();
    this.messages = [];
    this.waitingForReply = false;
  }

  addMessage(message: Message) {
    this.messages.push(message);
  }

  finish() {
    this.finishedAt = new Date();
  }

  waitForReply(currentAction: string, currentStep: string) {
    this.waitingForReply = true;
    this.currentAction = currentAction;
    this.currentStep = currentStep;
  }

  removeWaitForReply(): void {
    this.waitingForReply = false;
  }

  isWaitingForReply(): boolean {
    return this.waitingForReply;
  }

  getLastAction(): string {
    if (!this.waitingForReply)
      throw new Error("This session is not waiting for response");

    if (!this.currentAction)
      throw new Error("There's no last action registered");

    return this.currentAction;
  }

  getLastStep(): string {
    if (!this.waitingForReply)
      throw new Error("This session is not waiting for response");

    if (!this.currentStep) throw new Error("There's no last step registered");

    return this.currentStep;
  }

  setVariable(name: string, value: any): void {
    this.variables[name] = value;
  }

  getVariables() {
    return this.variables;
  }
}
