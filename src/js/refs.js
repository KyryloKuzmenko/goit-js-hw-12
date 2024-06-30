export const refs = {
  loadMoreBtn: document.querySelector('.js-load-more'),
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

export function showLoader() {
  refs.loader.classList.remove('hidden');
}

export function hideLoader() {
  refs.loader.classList.add('hidden');
}

export function showBtn() {
  refs.loadMoreBtn.classList.remove('is-hidden');
}
export function hiddenBtn() {
  refs.loadMoreBtn.classList.add('is-hidden');
}
