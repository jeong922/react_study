const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_PATH = 'https://api.themoviedb.org/3';

export async function getMovies({ pageParam }) {
  const response = await fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=ko&page=${pageParam}`
  );
  const result = await response.json();
  return result;
}
