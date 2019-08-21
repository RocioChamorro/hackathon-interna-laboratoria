import { components } from "../view-controller/index.js";
import {capturePhoto} from "../view-controller/controllerPhoto.js";
import {getsessionStorage, submitFirebase} from "../view-controller/controlerProfile.js"
import {readData} from "../firestore.js"
import {readRegister} from "../view-controller/controlerAdmi.js"

export const changeHash = (hash) => {
  window.location.hash = hash;
}

export const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return changeView('#/home');
  } else if (hash === '#/home'||hash === '#/register' ) {
    return changeView(hash);
  } 
  else if (hash === '#/photo') {
  return changeView(hash);
  }
  else if (hash === '#/profile') {
    return changeView(hash);
    }
  else if (hash === '#/admin') {
      return changeView(hash);
      }
  else {
    return changeView('#/home');
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
     case '#/photo': {main.appendChild(components.photo());
      capturePhoto();
     break;
    }
    case '#/profile': {main.appendChild(components.profile());
      getsessionStorage();
      submitFirebase();
     break;
    }
    case '#/admin': {main.appendChild(components.admin());
      readData('users', 'createdAt', (query) => {
        readRegister(query);
    })
     break;
    }
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