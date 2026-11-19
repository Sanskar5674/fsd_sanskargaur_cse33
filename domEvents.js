
const EventEmitter = require('events');

// Simulate a DOM element
class Button extends EventEmitter {
    click() {
        console.log('Button was clicked!');
        this.emit('click');
    }
}

// Create a button object
const myButton = new Button();

// Add click event listener
myButton.on('click', () => {
    console.log('Event Listener: Button click detected!');
});

// Add another listener
myButton.on('click', () => {
    console.log('Event Listener: Performing an action...');
});

// Simulate button click
myButton.click();
