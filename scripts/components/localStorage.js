export function local() {
  const inputs = document.querySelectorAll('.form [required]');
  console.log(inputs);

  inputs.forEach((input) => {
    const span = document.createElement('span');
    span.id = input.name;
    span.textContent = input.title;
    span.classList.add('form-error', 'none');
    input.insertAdjacentElement('afterend', span);
  });

  const formRegister = document.getElementById('loginForm');
  const repeatPassword = document.getElementById('repeatPassword');

  const repeatPasswordError = document.createElement('span');
  repeatPasswordError.textContent = 'Las contraseñas no coinciden';
  repeatPasswordError.classList.add('form-error', 'none');
  repeatPassword.insertAdjacentElement('afterend', repeatPasswordError);

  formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const userName = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const repeatPasswordValue = repeatPassword.value;
    const birthday = document.getElementById('birthday').value;
    const newsletter = document.getElementById('newsletter').value;

    if (password !== repeatPasswordValue) {
      repeatPasswordError.classList.remove('none');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userRegistered = users.find((user) => user.name === name);
    if (userRegistered) {
      return alert('El usuario ya está registrado');
    }
    users.push({
      name: name,
      lastName: lastName,
      userName: userName,
      password: password,
      birthday: birthday,
      newsletter: newsletter,
    });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registro exitoso');
  });

  repeatPassword.addEventListener('input', () => {
    repeatPasswordError.classList.add('none');
  });
}

document.addEventListener('keyup', (e) => {
  if (e.target.matches('.form [required]')) {
    let input = e.target,
      pattern = input.getAttribute('pattern');

    if (pattern && input.value !== '') {
      let regex = new RegExp(pattern);
      return !regex.exec(input.value)
        ? document.getElementById(input.name).classList.add('is-active')
        : document.getElementById(input.name).classList.remove('is-active');
    }

    if (!pattern) {
      return input.value === ''
        ? document.getElementById(input.name).classList.add('is-active')
        : document.getElementById(input.name).classList.remove('is-active');
    }
  }
});
