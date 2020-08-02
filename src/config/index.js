/* eslint-disable linebreak-style */
const URL_BACKEND_TOP = window.location.href.includes('localhost')
  ? 'http://localhost:8080/categorias'
  : 'https://sanflix.herokuapp.com';

export default URL_BACKEND_TOP;
