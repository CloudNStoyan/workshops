import './hello-world-button.scss';

class HelloWorldButton {
    buttonCssClass = 'hello-world-button'
    render() {
        const button = document.createElement('button');
        button.classList.add(this.buttonCssClass)
        button.addEventListener('click', () => {
            const p = document.createElement('p');
            p.classList.add('hello-world-text')
            p.innerHTML = 'Hello world';
            document.body.appendChild(p);
        })
        button.innerHTML = 'Hello World';
        document.body.appendChild(button);
    }
}

export default HelloWorldButton;