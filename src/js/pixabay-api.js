import axios from 'axios';


export async function getImage(image, page = 1, per_page = 15) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '44411867-7607aa296582669a38968dfd5',
    q: image,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page,
  });
  const url = `${BASE_URL}?${params}`;
  try {
    const response = await axios.get(url);
    if (!response) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.data;
    return data;
  } catch (error) {
    return { error: error.message };
  }
}

