import renderToDOM from '../utils/renderToDom';

const showVocab = (array) => {
  const btnString = `
  <div class="main-container">
  <button type="button" class="btn btn-outline-primary">Python</button>
  <button type="button" class="btn btn-outline-secondary">JavaScript</button>
  <button type="button" class="btn btn-outline-success">CSS</button>
  <button type="button" class="btn btn-outline-info">HTML</button>
  </div>`;
  renderToDOM('#main-container', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.language_id}</h6>
        <p>${item.description}</p>
        <hr>
        <i class="fas fa-edit btn btn-info" id="update-author--${item.firebaseKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${item.firebaseKey}"></i>
      </div>
    </div>
    `;
  });
  renderToDOM('#store', domString);
};

export default showVocab;
