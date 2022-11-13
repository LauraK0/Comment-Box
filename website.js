const userComment = document.getElementById("message");
const characterCount = document.getElementById("charNum");


userComment.addEventListener("keyup", updateCharacterCounter);

document.getElementById("contactForm").addEventListener("submit", validateMyForm);

function updateCharacterCounter(){
  const commentLength = userComment.value.length
  characterCount.textContent = `${commentLength}/140 characters`;

  if (commentLength > 140) {
      userComment.classList.add("error");
  } 

  if (commentLength < 140 && userComment.classList.contains("error")) {
    userComment.classList.remove("error");
} 
}

function validateMyForm(e) {
    let name = document.forms.contactForm.name.value;
    let email = document.forms.contactForm.email.value;
    let message = document.forms.contactForm.message.value;

    let validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; // Javascript reGex for email validation
    let validateText = /\d+$/g; // Javascript reGex for Name validation

    if (name == '' || name.trim().length === 0 || validateText.test(name)) {
      e.preventDefault();
      window.alert('Please tell us your name');
      return false;
    }

    if (email == '' || !validateEmail.test(email)) {
      e.preventDefault();
      window.alert('Please enter a valid e-mail address.');
      return false;
    }

    if (message == '' || message.trim().length === 0 || validateText.test(message)) {
      e.preventDefault();
      window.alert('Please enter your message.');
      return false;
    }

    if (message.length >= 140) {
      e.preventDefault();
      window.alert('Your message is too long. Please shorten it before submitting.');
      return false;
    }

    window.alert('Thank you for contacting us');
    return true;
  }
