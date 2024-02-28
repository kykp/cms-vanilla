const Main = () => {
  const main = document.createElement('main')
  main.classList.add('main');

  return main;
}

const mainElement = Main();
document.body.appendChild(mainElement);
