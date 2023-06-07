import { BayesClassifier } from "natural";
import { Domain } from "../../domain/domain.protocol";
import { Message } from "../../domain/message.entity";

export class Natural implements Domain.Classifier {
  private readonly classifier: BayesClassifier;
  constructor(raw: any) {
    this.classifier = BayesClassifier.restore(raw as any);
  }
  classify(text: string): Message {
    const intention = this.classifier.classify(text);
    return new Message(text, intention);
  }
}
