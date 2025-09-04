const greeting = function (name) {
    return `Hello, ${name}`;
}

// Arrow function - explicit return

const Newgreeting = (name) => {
    return `Hello, ${name}`;
}

// Arrow function - implicit return

const NewgreetingImplicit = name => `Hello, ${name}`;
const NewgreetingImplicitWhitTwoParameters = (name, lastName) => `Hello, I'm ${name}`;

// Lexical Binding

const finctionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name}, says: ${message}`);
    },
      messageWithArrowFunction: (message) => {
        console.log(`${this.name}, says: ${message}`);
    }
}

finctionalCharacter.messageWithTraditionalFunction('With great power, comes great responsibility.');
finctionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus.');