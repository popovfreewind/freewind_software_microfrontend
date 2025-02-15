import './style.css';

function mainContainerComponent() {
    const container = document.createElement('div');
    const title = getTittleComponent();

    container.append(title);
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';

    return container;
}


function getTittleComponent() {
    const title = document.createElement('h1');
    title.innerHTML = "react remote component";
    title.style.textAlign = 'center';

    return title;
}

document.body.appendChild(mainContainerComponent());
