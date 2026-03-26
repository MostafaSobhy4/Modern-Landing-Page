let send_us_form = document.querySelector(".contus-form");
let name_form = document.querySelector(".cont-inputs .name");
let email_form = document.querySelector(".cont-inputs .email");
let message_form = document.querySelector(".message");
let message_error_form = document.querySelector(".message_error")
let button_form = document.querySelector(".submit");

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

button_form.addEventListener("click", (e) => {
    e.preventDefault();

    message_error_form.textContent = "";
    message_error_form.style.marginBottom = "10px";

    if (name_form.value === "" || email_form.value === "" || message_form.value === "") {
        message_error_form.textContent = "All fields are required!";
    } 
    else if (name_form.value.length < 3) {
        message_error_form.textContent = "Name must be longer than 2 characters";
    } 
    else if (!emailPattern.test(email_form.value)) {
        message_error_form.textContent = "Invalid email format. Example: user@gmail.com";
    }
    else {
        let messageData = {
            name: name_form.value,
            email: email_form.value,
            message: message_form.value
        };

        let messages = JSON.parse(localStorage.getItem("messages")) || [];
        messages.push(messageData);

        localStorage.setItem("messages", JSON.stringify(messages));

        console.log("Data saved to localStorage!");
        message_error_form.textContent = "";

        name_form.value = "";
        email_form.value = "";
        message_form.value = "";

        let counter;
        let messageSent = document.querySelector(".messageSent");
        messageSent.style.display = "block";
        messageSent.style.animation = "none";
        messageSent.style.animation = "pop 3s ease forwards";

        clearTimeout(counter);

        counter = setTimeout(() => {
            messageSent.style.display = "none";
        }, 3000);
        pop.remove();
}
});

const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight) {
      el.classList.add('show');
      console.log(window.innerHeight);
      
    }
  });
});
