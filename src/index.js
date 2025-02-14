import './style.css';

function mainContainerComponent() {
    const container = document.createElement('div');
    const title = getTittleComponent();
    const selectForm = getPortfolioSelectorForm();
    const portfolioContainer = document.createElement('div');

    container.append(title, selectForm);
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';

    initPortfolioSelectionListener(selectForm, portfolioContainer);

    return container;
}

function initPortfolioSelectionListener(selectForm, portfolioContainer) {
    selectForm.addEventListener('change', (event) => {
        const selectedPortfolio = event.target.value;
    });
}

function getTittleComponent() {
    const title = document.createElement('h1');
    title.innerHTML = "Dmytro Popov Portfolio";
    title.style.textAlign = 'center';

    return title;
}

function getPortfolioSelectorForm() {
    const portfoliosForm = document.createElement('form');
    const title = document.createElement('p');
    const reactButton = getPortfolioRadioButton('react', 'React');
    const angularButton = getPortfolioRadioButton('angular', 'Angular');
    const vueButton = getPortfolioRadioButton('vue', 'Vue');
    portfoliosForm.append(title, ...reactButton, ...angularButton, ...vueButton);

    title.innerHTML = 'This portfolio was created for testing purposes. The main page is built with Vanilla JavaScript, while a portfolio section is developed using React, Angular and Vue. Please pick a technology to use to display the portfolio section.';

    return portfoliosForm;
}

function getPortfolioRadioButton(value, label) {
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.value = value;

    const radioLabel = document.createElement('label');
    radioLabel.innerHTML = label;
    radioLabel.style.marginRight = '10px';
    radioLabel.style.marginLeft = '5px';

    return [radio, radioLabel];
}

document.body.appendChild(mainContainerComponent());
