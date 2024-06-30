export function markup(images) {
  return images
    .map(image => {
      return `<li class="gallery-item"
      <a class="gallery-link" href="${image.largeImageURL}">
    <img
      width=360;
      height=200;
      class="gallery-image"
      src="${image.webformatURL}"
      alt="${image.tags} " />
          <div class="image-info">
               <p>LIKES: ${image.likes}</p>
                    <p>VIEWS: ${image.views}</p>
                    <p>COMMENTS: ${image.comments}</p>
                    <p>DOWNLOADS: ${image.downloads}</p>
                </div>
            </a>
            </li>
        `;
    })
    .join('');
}