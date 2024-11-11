import commonButtons from "./buttons.js";
import ButtonList from "./buttonList.js";

document.addEventListener('DOMContentLoaded', function() {

    commonButtons.forEach(btn => {
 
       const button = new ButtonList(btn.textContent, btn.link);
       button.renderButtons();
    });
 });
 