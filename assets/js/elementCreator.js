class ElementCreator {

    static create(tag, ...classes) {
       const element = document.createElement(tag);
       classes.forEach(className => { element.classList.add(className) });
       return element;
    }
}

export default ElementCreator;