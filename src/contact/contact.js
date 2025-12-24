import locationSvg from "../images/location.svg";
import mailSvg from "../images/mail.svg";
import phoneSvg from "../images/phone.svg";

const contactPage = function () {
    const content = document.querySelector('#content');
    const wrapper = document.createElement('div');
    const contactContainer = document.createElement('div');
    const contactSection = document.createElement('div');
    const form = document.createElement('form');
   
   
    contactContainer.classList.add("contact-container");
    wrapper.classList.add("contact");


    contactContainer.append(contactSection, form);
    wrapper.append(contactContainer);


    contactSection.classList.add("contact-section");
    contactSection.innerHTML = `
  <h1>Contact Us</h1>
  <p class="contact-description">
    We’d love to hear from you.
    Visit us for a comforting bowl of ramen, or reach out using the details below.
  </p>

  <div class="info-block">
    <div class="info-item">
      <img src="${locationSvg}" alt="Location icon">
      <p>
      Mitsu’s Ramen, Sakura Heights 1F, Asakusa 1-16-8, Taito City, Tokyo 111-0032, Japan.
      </p>
    </div>

    <div class="info-item">
      <img src="${mailSvg}" alt="Phone icon">
      <p>+81 3-6455-8721</p>
    </div>

    <div class="info-item">
      <img src="${phoneSvg}" alt="Email icon">
      <p>hello@mitsuramen.com</p>
    </div>
  </div>

  <div class="opening-hour-block">
    <h2>Opening Hours</h2>
    <ul>
      <li>
        <span>Monday – Sunday</span>
        <span>12:00 PM – 10:30 PM</span>
      </li>
    </ul>
  </div>
`;


   



   
    function createFieldset(id, type, labelText, textarea = false) {
        const div = document.createElement('div');
        const label = document.createElement('label');

        div.setAttribute("class", "fieldset")
        label.setAttribute("for", id);
        label.textContent = labelText;

        if (textarea) {
            const textarea = document.createElement('textarea');
            textarea.setAttribute("id", id);
            textarea.setAttribute("rows", "4");
            textarea.setAttribute("cols", "5");
            div.appendChild(label);
            div.appendChild(textarea);
        }
        else {
            const input = document.createElement('input');
            input.setAttribute("id", id);
            input.setAttribute("type", type);
            div.appendChild(label);
            div.appendChild(input);
        }

        return div;


    }


    const nameGroup = createFieldset("name", "text", "NAME");
    const emailGroup = createFieldset("email", "email", "EMAIL");
    const phoneGroup = createFieldset("phone", "tel", "PHONE");
    const dateGroup = createFieldset("date", "date", "DATE");
    const messageGroup = createFieldset("comments", "comments", "MESSAGE", true);


    const submitButton = document.createElement('button');
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "SEND MESSAGE";


    form.append(nameGroup, emailGroup, phoneGroup, dateGroup, messageGroup, submitButton);
    content.append(wrapper);

    form.addEventListener("click", (e) =>
    {
        e.preventDefault();
    })


};

export default contactPage;