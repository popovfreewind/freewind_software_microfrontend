import './style.css';

function vanillaComponent() {
    const element = document.createElement('div');

    element.innerHTML = "Hello webpack!";

    return element;
}

document.body.appendChild(vanillaComponent());