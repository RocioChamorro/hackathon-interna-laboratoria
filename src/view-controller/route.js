import { components } from "../view-controller/index.js";
import {capturePhoto} from "../view-controller/controllerPhoto.js";
import {getsessionStorage} from "../view-controller/controlerProfile.js"

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
  else {
    return changeView('#/profile');
  }
}

export const changeView = (route) => {
  const main = document.getElementById("main");
  main.innerHTML = '';
  switch (route) {
    case '#/home':  main.appendChild(components.home())
      break;
    case '#/register': {console.log(main.appendChild(components.register()));
      const autocompleteHost = () => {
        console.log('register')
        const options = {
          data: {
            'Gonzalo': null,
            'Alejandra Ramirez': null,
            'Vania': null,
            'Rocío': null
          },
          minLength: 4
        }
        const elems = document.querySelectorAll('.autocomplete');
        const instances = M.Autocomplete.init(elems, options);
      };

      autocompleteHost();
      break;
    }
    case '#/photo': {main.appendChild(components.photo());
      capturePhoto();

     break;
    }
    case '#/profile': {main.appendChild(components.profile());
      getsessionStorage();
   

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