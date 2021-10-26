import axios from 'axios';

const API_KEY = '1a76c75a79b8cb05fb0f603db17d8720';

export function getTrend() {
  return axios
    .get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`)
    .then(r => r.data);
}
