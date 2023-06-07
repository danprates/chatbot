export class Message {
  readonly date: Date;
  constructor(readonly text: string, readonly intention: string) {
    this.date = new Date();
  }
}
