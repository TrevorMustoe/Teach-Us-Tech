import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const showVocab = (array) => {
  clearDom();
  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.language_id}</h6>
        <p>${item.description}</p>
        <hr>
        <i class="btn btn-info" id="edit-vocab--${item.firebaseKey}">Edit Card</i>
        <i class="btn btn-danger" id="delete-vocab--${item.firebaseKey}">Delete Card</i>
      </div>
    </div>
    `;
  });
  renderToDOM('#store', domString);
};

export default showVocab;
