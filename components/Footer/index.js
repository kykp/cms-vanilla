const Footer = () => {
  const header = document.createElement('footer')
  header.classList.add('footer');
  header.textContent = 'Footer';
  return header;
}


const footerElement = Footer();

document.body.appendChild(footerElement);