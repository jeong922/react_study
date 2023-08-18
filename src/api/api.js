const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_PATH = 'https://api.themoviedb.org/3';

export async function getMovies(param) {
  const response = await fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=ko&page=${param.pageParam}`
  );
  const result = await response.json();
  return result;
}

export async function getTv(page) {
  const response = await fetch(
    `${BASE_PATH}/tv/top_rated?api_key=${API_KEY}&language=ko&page=${page}`
  );
  const result = await response.json();
  return result;
}

export async function getMovie2(page) {
  const response = await fetch(
    `${BASE_PATH}/movie/top_rated?api_key=${API_KEY}&language=ko&page=${page}`
  );
  const result = await response.json();
  return result.results;
}
