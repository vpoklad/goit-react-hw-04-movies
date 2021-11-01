import axios from 'axios';

const API_KEY = '1a76c75a79b8cb05fb0f603db17d8720';

export function getTrend() {
  return axios
    .get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`)
    .then(r => r.data);
}
export function getInfoById(type, id) {
  return axios
    .get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=en-US`,
    )
    .then(r => r.data);
}

export function getInfoByQuerry(query, page = 1) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/multi?query=${query}&page=${page}&api_key=${API_KEY}`,
    )
    .then(r => r.data);
}

export function getCreditsById(type,id) {
  return axios
    .get(
      `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${API_KEY}`,
    )
    .then(r => r.data);
}
export function getRewievsById(type,id) {
  return axios
    .get(
      `https://api.themoviedb.org/3/${type}/${id}/reviews?api_key=${API_KEY}`,
    )
    .then(r => r.data);
}
