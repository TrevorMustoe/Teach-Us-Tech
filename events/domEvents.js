import {
  getJavascript, getPython, getCSS, getHTML
}
  from '../api/vocabData';
import addVocabForm from '../components/forms/addVocab';
import showVocab from '../pages/vocab';
import clearDom from '../utils/clearDom';
import { signOut } from '../utils/auth';

const domEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    document.querySelector('#logout-button')
      .addEventListener('click', signOut);
    // this is user entry
    if (e.target.id.includes('create-entry')) {
      addVocabForm();
    }
    if (e.target.id.includes('python')) {
      clearDom();
      getPython().then((vocabWords) => showVocab(vocabWords));
    }
    if (e.target.id.includes('javascript')) {
      clearDom();
      getJavascript().then((vocabWords) => showVocab(vocabWords));
    }
    if (e.target.id.includes('css')) {
      clearDom();
      getCSS().then((vocabWords) => showVocab(vocabWords));
    }
    if (e.target.id.includes('html')) {
      clearDom();
      getHTML().then((vocabWords) => showVocab(vocabWords));
    }
  });
};

export default domEvents;
