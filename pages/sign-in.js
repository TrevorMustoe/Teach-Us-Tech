import renderToDom from '../utils/renderToDom'; // this is importing render to dom

const signInScreen = () => { // starts a new function that will hold out log in screen info
  const titleString = '<h1>Teach US TECH!!</h1>'; // title for the intro page
  const btnString = '<button class="btn btn-success btn-lg mb-4" id="sign-in-btn">Sign In Here!</button>'; // button for signing in
  const domString = titleString + btnString; // adds the two above elements into one string
  renderToDom('#app', domString); // calls a render to dom to the app div and the two elements stored in the dom string above
};

export default signInScreen; // exports the signInScreen to use in our main.js
