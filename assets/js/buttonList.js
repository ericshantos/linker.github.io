import ElementCreator from "./elementCreator.js";

class ButtonList {
   constructor(textContent, link) {
      this.textContent = textContent;
      this.link = link;
   }

   renderButtons() {
      const linkList = document.getElementById('link-list');
      const listItem = this._createButtonElement();
      linkList.appendChild(listItem);
   }
   
   _createButtonElement() {
      const li = ElementCreator.create('li', 'link');

      const a = ElementCreator.create('a');
      a.href = this.link;

      const button = ElementCreator.create('button', 'link-button');
      button.textContent = this.textContent;

      a.appendChild(button);
      li.appendChild(a);
      return li;
   }
};

export default ButtonList;