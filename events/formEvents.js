import { createVocab, getVocab, updateVocab } from '../api/vocabData';
import showVocab from '../pages/vocab';

const formEvents = () => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    const payload = {
      title: document.querySelector('#title').value,
      description: document.querySelector('#description').value,
      language_id: document.querySelector('#language').value,
    };
    createVocab(payload).then(({ name }) => {
      const patchPayload = { firebaseKey: name };
      updateVocab(patchPayload).then(() => {
        getVocab().then(showVocab);
      });
    });
  });
};

export default formEvents;
