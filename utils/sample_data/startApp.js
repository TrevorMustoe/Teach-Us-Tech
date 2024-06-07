import domBuilder from '../../components/shared/domBuilder';
import navBar from '../../components/shared/navBar';
import showVocab from '../../pages/vocab';
import { getVocab } from '../../api/vocabData';
import domEvents from '../../events/domEvents';

const startApp = () => {
  domBuilder();
  domEvents();
  navBar();
  getVocab().then((vocabWords) => showVocab(vocabWords));
};

export default startApp;
