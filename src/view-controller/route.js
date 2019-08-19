import { components } from "../view-controller/index.js";

export const changeHash = (hash) => {
  window.location.hash = hash;
}

export const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return changeView('#/home');
  } else if (hash === '#/home'||hash === '#/register' ) {
    return changeView(hash);
  } else {
    return changeView('#/perfil');
  }
}

export const changeView = (route) => {
  const main = document.getElementById("main");
  main.innerHTML = '';
  switch (route) {
    case '#/home':  main.appendChild(components.home())
    break;
     case '#/register': main.appendChild(components.register())
     break;
    //  case '#/perfil':
    //   const callback = (data) => {
    //     main.innerHTML = '';
    //     main.appendChild(components.header(data))
    //     main.appendChild(components.body(data))
    //   }
    //   getPost(callback)
    //  break;
    default:
        break;
  }
}

export const init = () => {
  window.addEventListener('load', changeTmp(window.location.hash))
  if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash)
}