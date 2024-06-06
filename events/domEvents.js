import addVocabForm from '../components/forms/addVocab';

const domEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('create-entry')) {
      addVocabForm();
    }
  });
};

export default domEvents;
