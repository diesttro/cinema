import { tmdbApi } from 'services';

const getGenres = async () => {
  const url = new URL('https://api.themoviedb.org/3/genre/movie/list');
  url.searchParams.append('api_key', process.env.API_KEY);

  const data = await tmdbApi(url.href);

  return data?.genres;
};

const handler = async (request, response) => {
  try {
    const data = await getGenres();

    response.status(200).json({ data });
  } catch (error) {
    response.status(error.status).json({ message: error.message });
  }
};

export default handler;
export { getGenres };
