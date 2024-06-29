import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from '../main';

export function markup(images) {
  const createdMarkup = images
    .map(img => { return `<li class="gallery-item"
      <a class="gallery-link" href="${img.largeImageURL}">
    <img
      width=360;
      height=200;
      class="gallery-image"
      src="${img.webformatURL}"
      alt="${img.tags} " />
          <div class="image-info">
               <p>LIKES: ${img.likes}</p>
                    <p>VIEWS: ${img.views}</p>
                    <p>COMMENTS: ${img.comments}</p>
                    <p>DOWNLOADS: ${img.downloads}</p>
                </div>
            </a>
            </li>
        `;
    })
    .join('');
  lightbox.refresh();
  return createdMarkup;
}

  

const lightbox = new SimpleLightbox('.gallery li', {
  captionsData: 'alt',
  captionDelay: 250,
});



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
