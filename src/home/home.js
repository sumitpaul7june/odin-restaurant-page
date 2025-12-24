import ramenImg from "../images/delicious-ramen-bowl-with-soft-boiled-eggs-spring-onions.png"


const initialLoadPage = function()
{
    const content = document.querySelector('#content');

    const wrapper = document.createElement('div');
    wrapper.classList.add("home");

    const homeContainer = document.createElement('div');
    homeContainer.classList.add("home-container");

    


    const heroText = document.createElement('div');
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const img = document.createElement("img");

    h2.textContent = `Welcome to Mitsu's Ramen`;
    p.textContent = `At Mitsu’s Ramen, we serve deeply comforting bowls inspired by traditional Japanese ramen.
                    Slow-simmered broths, hand-picked ingredients, and perfectly cooked noodles come together to create flavors that feel both authentic and unforgettable.
                    Whether you’re here for a quiet meal or a warm bowl after a long day, Mitsu’s Ramen is made to be savored — one slurp at a time.`
    img.src = ramenImg;
    img.setAttribute("width", "400");
    img.setAttribute("height", "400");
    heroText.setAttribute("class", "hero-text");
    
    heroText.append(h2, p);

    homeContainer.append(heroText, img);
    wrapper.append(homeContainer);
    content.append(wrapper);
};

export default initialLoadPage;