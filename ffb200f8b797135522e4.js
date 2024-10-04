import "./style.css";
import {homeHeader, homeImage, homeParagraph} from "./home.js";
import {menuHeader, item1, item2, item3, item4, item5, item6} from "./menu.js";
import {aboutHeader, aboutImage, aboutParagraph} from "./about.js";

const content = document.querySelector("#content");
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

content.textContent = "";
content.appendChild(homeHeader);
content.appendChild(homeImage);
content.appendChild(homeParagraph);

homeButton.addEventListener('click', () => {
    content.textContent = "";
    content.appendChild(homeHeader);
    content.appendChild(homeImage);
    content.appendChild(homeParagraph);
});

menuButton.addEventListener('click', () => {
    content.textContent = "";
    content.appendChild(menuHeader);
    content.appendChild(item1);
    content.appendChild(item2);
    content.appendChild(item3);
    content.appendChild(item4);
    content.appendChild(item5);
    content.appendChild(item6);
});

aboutButton.addEventListener('click', () => {
    content.textContent = "";
    content.appendChild(aboutHeader);
    content.appendChild(aboutImage);
    content.appendChild(aboutParagraph);
});

console.log("Check");
console.log(homeHeader);
console.log(homeImage);
console.log(homeParagraph);