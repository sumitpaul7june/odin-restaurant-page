import HomePage from "./home/home.js"
import MenuPage from "./menu/menu.js"
import contactPage from "./contact/contact.js"
import "./home/home.css"
import "./menu/menu.css"
import "./contact/contact.css"





HomePage();

const nav = document.querySelector('nav');
const content = document.querySelector('#content');

nav.addEventListener("click", (e) =>
{
    
    if(e.target.id === "home-btn")
    {
        content.innerHTML = '';
        HomePage();
    }
    else if(e.target.id === "menu-btn")
    {
        content.innerHTML = '';
        MenuPage();
    }
    else if(e.target.id === "contact-btn")
    {
        content.innerHTML = '';
        contactPage();
        
        
    }
    else
    {
        return;
    }
})