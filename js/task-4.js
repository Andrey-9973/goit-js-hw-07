const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const email = formData.get('email').trim();
  const password = formData.get('password').trim();
  const data = {
    email,
    password,
  };

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  console.log(data);
  form.reset();
});
