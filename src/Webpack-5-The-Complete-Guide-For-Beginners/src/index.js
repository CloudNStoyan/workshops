import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import Heading from './components/heading/heading.js';

const button = new HelloWorldButton();
button.render();

const heading = new Heading();
heading.render();

if (process.env.NODE_ENV === 'production') {
    console.log('Production mode');
} else if (process.env.NODE_ENV === 'development') {
    console.log('Development mode');
}

HelloWorldButton.methodThatDoesNotExist();