'use strict';

// helper functions
const getElementFrom = (className) => document.querySelector(className);
const getEveryElementFrom = (className) => document.querySelectorAll(className);

const addClassTo = (variable, className) => {
    variable.classList.add(className);
};

const removeClassFrom = (variable, className) => {
    variable.classList.remove(className);
};

const addClickEventTo = (variable, func) => {
    variable.addEventListener('click', func);
};

// DOM variables
const modal = getElementFrom('.modal');
const overlay = getElementFrom('.overlay');

const closeModelButton = getElementFrom('.close-modal');
const openModelButton = getEveryElementFrom('.open-modal');

// functions
const openModal = () => {
    removeClassFrom(modal, 'hidden');
    removeClassFrom(overlay, 'hidden');
};

const closeModal = () => {
    addClassTo(modal, 'hidden');
    addClassTo(overlay, 'hidden');
};

const closeModalWith = (key) => {
    document.addEventListener('keydown', (event) => {
        if (event.key === key) {
            closeModal();
        }
    });
};

// main
const main = () => {
    addClickEventTo(closeModelButton, closeModal);
    addClickEventTo(overlay, closeModal);

    for (let i = 0; i < openModelButton.length; i++) {
        const element = openModelButton[i];
        addClickEventTo(element, openModal);
    }

    closeModalWith('Escape');
};

main();
