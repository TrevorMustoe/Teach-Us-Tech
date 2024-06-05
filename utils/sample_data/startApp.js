import domBuilder from '../../components/shared/domBuilder';
import navBar from '../../components/shared/navBar';
import showVocab from '../../pages/vocab';

const startApp = () => {
  domBuilder();
  navBar();
  showVocab();
};

export default startApp;
