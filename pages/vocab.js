import renderToDOM from '../utils/renderToDom';

const showVocab = () => {
  const domString = `
    <div class="main-container">
    <button type="button" class="btn btn-outline-primary">Python</button>
    <button type="button" class="btn btn-outline-secondary">JavaScript</button>
    <button type="button" class="btn btn-outline-success">CSS</button>
    <button type="button" class="btn btn-outline-info">HTML</button>
    </div>`;

  renderToDOM('#main-container', domString);
};

export default showVocab;
