const container = document.getElementById('form-container');
const form = document.getElementById('form');

form.addEventListener('submit', rsvp);

function rsvp(e) {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;

  const guest = {
    firstName: firstName,
    lastName: lastName,
    email: email
  }

  guestList = firebase.database();

  guestList.ref('guests').push(guest);

  container.innerHTML = "<h1>See you there!<h1/>"
}
