// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import renderToDom from '../utils/renderToDom';

const newString = 'HEllo world';

const init = () => {
  renderToDom('#app', newString);
};

init();
