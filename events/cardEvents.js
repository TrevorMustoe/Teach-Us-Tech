import { deleteSingleVocab, getSingleVocab, getVocab } from '../api/vocabData';
import addVocabForm from '../components/forms/addVocab';
import showVocab from '../pages/vocab';

const cardEvents = (user) => {
  document.querySelector('#store').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteSingleVocab(firebaseKey).then(() => {
          getVocab(user).then(showVocab);
        });
      }
    }
    // TODO: CLICK EVENT EDITING/UPDATING A BOOK
    if (e.target.id.includes('edit-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((bookObj) => addVocabForm(bookObj));
    }
  });
};

export default cardEvents;
