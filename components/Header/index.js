const Header = () => {
  const header = document.createElement('header')
  header.classList.add('header');

  const nav = document.createElement('nav');
  nav.classList.add('nav', 'container');

  const button = document.createElement('button');
  button.classList.add('button');
  button.textContent = 'Login';

  const logo = document.createElement('p');
  logo.textContent = 'LOGO';

  nav.appendChild(logo)
  nav.appendChild(button)
  header.appendChild(nav);

  return header;
}

const headerElement = Header();

document.body.appendChild(headerElement);