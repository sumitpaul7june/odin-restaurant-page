import shoyuRamenImg from "../images/shoyu_ramen.jpg";
import misoRamenImg from "../images/miso_ramen.jpg";
import tonkotsuRamenImg from "../images/tonkotsu_ramen.jpg";
import saltRamenImg from "../images/salt_ramen.jpg";

const Menu = function () {

    const content = document.querySelector('#content');

    /* =========================
       PAGE STRUCTURE
       ========================= */

    const wrapper = document.createElement('div');
    wrapper.classList.add("menu");

    const menuContainer = document.createElement('div');
    menuContainer.classList.add("menu-container");

    const menuTitle = document.createElement('h1');
    menuTitle.classList.add("menu-title");
    menuTitle.textContent = "Our Ramen Menu";

    const menuGrid = document.createElement('div');
    menuGrid.classList.add("menu-grid");

    // assemble static layout ONCE
    menuContainer.append(menuTitle, menuGrid);
    wrapper.append(menuContainer);
    content.append(wrapper);

    /* =========================
       DATA
       ========================= */

    const menuItems = [];

    function addItem(img, name, desc, price) {
        menuItems.push({ img, name, desc, price });
    }

    /* =========================
       MENU ITEMS
       ========================= */

    addItem(
        shoyuRamenImg,
        "Shoyu Ramen",
        "Soy-based broth with chicken stock, chashu pork, soft-boiled egg, nori, and scallions. Classic, light, deeply flavorful.",
        13.99
    );

    addItem(
        misoRamenImg,
        "Miso Ramen",
        "Rich miso-based broth with chicken stock, corn, butter, and soft-boiled egg. Deep, savory, and comforting.",
        14.99
    );

    addItem(
        tonkotsuRamenImg,
        "Tonkotsu Ramen",
        "Creamy pork bone broth simmered for hours, served with tender chashu pork. Bold, rich, and indulgent.",
        15.99
    );

    addItem(
        saltRamenImg,
        "Salt Ramen",
        "Light salt-seasoned broth with chicken and seafood notes. Clean, delicate, and balanced.",
        13.49
    );

    /* =========================
       RENDER
       ========================= */

    function renderItems() {
        menuItems.forEach(item => {
            const card = document.createElement('div');
            card.classList.add("card");

            const img = document.createElement('img');
            img.src = item.img;
            img.alt = item.name;

            const title = document.createElement('h3');
            title.textContent = item.name;

            const desc = document.createElement('p');
            desc.classList.add("item-description");
            desc.textContent = item.desc;

            const price = document.createElement('p');
            price.textContent = `$${item.price}`;

            card.append(img, title, desc, price);
            menuGrid.append(card);
        });
    }

    renderItems();
};

export default Menu;
