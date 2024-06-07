import { createVocab, getVocab, updateVocab } from '../api/vocabData';
import showVocab from '../pages/vocab';

const formEvents = () => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-vocab')) {
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
    }

    // TODO: CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        language_id: document.querySelector('#language').value,
        firebaseKey,
      };
      updateVocab(payload).then(() => {
        getVocab().then(showVocab);
      });
    }
  });
};

export default formEvents;
