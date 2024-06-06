import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-book--${obj.firebaseKey}` : 'submit-book'}" class="mb-4">
      <div class="form-group">
        <label for="title">Vocab Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Vocab Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="description">Language / Tech</label>
        <textarea class="form-control" placeholder="Language / Tech" id="description" style="height: 100px">${obj.language_id || ''}</textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit New Entry
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
