import client from '../utils/client';
// API CALLS FOR BOOKS

const endpoint = client.databaseURL;

// TODO: GET Vocab
const getVocab = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getPython = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords.json?orderBy="language_id"&equalTo="Python"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getJavascript = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords.json?orderBy="language_id"&equalTo="JavaScript"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getCSS = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords.json?orderBy="language_id"&equalTo="CSS"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getHTML = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords.json?orderBy="language_id"&equalTo="HTML"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getVocab, getPython, getJavascript, getCSS, getHTML
};
