const GENIUS_API_TOKEN = '_rxrdqWlMk7Mg2LP3ZEGl2YGdouH-sDxBwBmy8HHMAxACX88yhxD3OzUwl1brQNY';

// get find button
// bind event to button ('click')
// make callback function.
// take value of input (song ID)
// create URL (save as const variable)
// fetch the response from the server
// parse response to JSON
// take album art url, song title
// delete old displaying items
// display them

const findButton = document.querySelector('#find-button');
findButton.addEventListener('click', (event) => {
  event.preventDefault();
  const idValue = document.querySelector('#song-id').value;
  console.log(idValue);
  const url = `https://api.genius.com/songs/${idValue}?access_token=${GENIUS_API_TOKEN}`;
  fetch(url)
    .then(response => response.json())
    .then((json) => {
      console.log(json);
      const imageUrl = json.response.song.header_image_url;
      const title = json.response.song.full_title;
      const results = document.querySelector('#find-result');
      results.innerHTML = '';
      results.insertAdjacentHTML('beforeend',
        `<img width="100" src=${imageUrl}><p>${title}</p>`)
    });
});


const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  const songSearch = document.querySelector('#song-search-text').value;
  console.log(songSearch);
  const url = `https://api.genius.com/search?q=${songSearch}&access_token=${GENIUS_API_TOKEN}`;
  fetch(url)
    .then(response => response.json())
    .then((json) => {
      console.log(json);
      const imageUrl = json.response.hits[0].result.song_art_image_url;
      const title = json.response.hits[0].result.full_title;
      const results = document.querySelector('#search-result');
      results.innerHTML = '';
      results.insertAdjacentHTML('beforeend',
        `<img width="100" src=${imageUrl}><p>${title}</p>`)
    });

});
