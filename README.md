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

## Customization

### Training Data

Modify the training data in the `src/dataset.json` file to customize the chatbot's understanding of user intentions.

Add new intents or update the existing ones to fit your specific use case.

### Preprocessing

To train the chatbot with the provided data and generate a `src/classifier.json` file with the trained data, run the following command:

```bash
npm run train
```

This will train the chatbot using the data defined in the `src/dataset.json` file and generate a `src/classifier.json` file with the trained data. Make sure to adjust the training data in the `src/dataset.json` file according to your specific needs.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
