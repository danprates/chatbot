# Chatbot using Naive Bayes

This is a simple chatbot implemented using the Naive Bayes algorithm. The chatbot is designed to interact with users through the command-line interface (CLI) and classify their inputs based on pre-defined intentions.

## Features

- Responds to user inputs and classifies their intentions using Naive Bayes.
- Supports multiple predefined intentions, such as greetings and goodbye.
- Allows for easy customization and expansion of the training data.
- Written in Typescript for the Node.js runtime environment.

## Usage

Install the dependencies:

```bash
npm install
```

Start the chatbot in the terminal:

```bash
npm run start
```

Interact with the chatbot by entering text-based inputs in the terminal. Type "exit" to end the conversation.

## Intentions

The chatbot is designed to handle various user intentions and respond accordingly. Below are the main intentions supported by the chatbot:

- **Greetings**: This intention represents a single-step action where the chatbot responds with a greeting to the user.

- **Goodbye**: This intention represents a single-step action where the chatbot responds with a farewell to the user.

- **Create account**: This intention represents a multi-step action where the chatbot guides the user through the process of creating a new account. The chatbot will hold the session while the user fills in all the required data for account creation.

### Training Data

Modify the training data in the `src/dataset.json` file to customize the chatbot's understanding of user intentions.

Add new intents or update the existing ones to fit your specific use case.

### Preprocessing

To train the chatbot with the provided data and generate a `src/classifier.json` file with the trained data, run the following command:

```bash
npm run train
```

This will train the chatbot using the data defined in the `src/dataset.json` file and generate a `src/classifier.json` file with the trained data. Make sure to adjust the training data in the `src/dataset.json` file according to your specific needs.

## Exploring the diagrams

Below is a list of diagrams available for exploring the chatbot's system design and structure:

- [**Class diagram**](https://github.com/danprates/chatbot/blob/master/docs/class-diagram.doc.md): Provides an overview of the classes involved in the chatbot system, their relationships, and responsibilities.

These diagrams serve as visual representations of the chatbot's architecture and can be useful for understanding the system's design, implementation, and interactions between different components.

Feel free to explore the diagrams to gain a deeper understanding of the chatbot's structure and functionality.

You can customize this description further or add more diagrams as needed for your project.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://github.com/danprates/chatbot/blob/master/LICENSE).
