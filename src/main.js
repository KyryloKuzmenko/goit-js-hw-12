
import { getImage } from './js/pixabay-api.js';
import { markup, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

refs.form.addEventListener('submit', e => {
  refs.gallery.innerHTML = '';
  e.preventDefault();
  const value = e.target.elements.search.value.trim();
  if (value === '') {
    return iziToast.warning({
      title: 'warning',
      message: 'Enter a word for the query, please.',
      position: 'topRight',
      displayMode: 'once',
    });
  }

  showLoader();
  getImage(value)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          displayMode: 'once',
        });
      }
      markup(data.hits);
    })
    .catch(() => {})
    .finally(() => {
      hideLoader();
      refs.form.reset();
    });
});