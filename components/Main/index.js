const Main = () => {
  const header = document.createElement('main')
  header.classList.add('main');
  header.textContent = 'Main';
  return header;
}

const mainElement = Main();
document.body.appendChild(mainElement);
