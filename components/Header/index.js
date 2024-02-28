const Header = () => {
  const header = document.createElement('header')
  header.classList.add('header');
  header.textContent = 'Header';
  return header;
}

const headerElement = Header();

document.body.appendChild(headerElement);
