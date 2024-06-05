import domBuilder from '../../components/shared/domBuilder';
import navBar from '../../components/shared/navBar';
import showVocab from '../../pages/vocab';
import getVocab from '../../api/vocabData';

const startApp = () => {
  domBuilder();
  navBar();
  getVocab().then((vocabWords) => showVocab(vocabWords));
};

export default startApp;
