import { getImage } from './js/pixabay-api.js';
import {
  markup,
  showLoader,
  hideLoader,
  showBtn,
  hiddenBtn,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const refs = {
  loadMoreBtn: document.querySelector('.js-load-more'),
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

let page = 1;
let searchQuery = null;

refs.form.addEventListener('submit', async e => {
  refs.gallery.innerHTML = '';
  e.preventDefault();
  showLoader();
  hiddenBtn();
  page = 1;
  searchQuery = e.currentTarget.elements['search'].value.trim();
  const value = e.target.elements.search.value.trim();
  if (value === '') {
    return iziToast.warning({
      title: 'warning',
      message: 'Enter a word for the query, please.',
      position: 'topRight',
      displayMode: 'once',
    });
  }
  
  try {
    const res = await getImage(searchQuery, page);
    markup(res.hits);
    if (res.totalHits > 15) {
      showBtn();
    }
    
  } catch (error) {
    console.log(error)
  } finally {
    e.target.reset();
    hideLoader();
  }
});

refs.loadMoreBtn.addEventListener('click', async () => {
  page++;
  showLoader();
  try {
    const res = await getImage(searchQuery, page);
    refs.gallery.insertAdjacentHTML('beforeend', markup(res.hits));
    //================================scrol
    const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
    //===============================/scrol
    const lastPage = Math.ceil(res.total / 15);
    if (page === lastPage) {
      hiddenBtn();
      iziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
});
