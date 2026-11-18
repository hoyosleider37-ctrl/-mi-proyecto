const form = document.getElementById('contactForm');
const list = document.getElementById('contactList');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const lastname = document.getElementById('lastname').value;
  const phone = document.getElementById('phone').value;
  const city = document.getElementById('city').value;
  const address = document.getElementById('address').value;
  const gender = document.querySelector('input[name="gender"]:checked');

  const li = document.createElement('li');
  li.innerHTML = `<strong>${name} ${lastname}</strong> - ${gender ? gender.value : ''}<br>
  📞 ${phone} | 📍 ${city}, ${address}`;

  list.appendChild(li);
  form.reset();
});