import { tmdbApi } from 'services';

const getTrending = async () => {
  const url = new URL('https://api.themoviedb.org/3/trending/movie/day');
  url.searchParams.append('api_key', process.env.API_KEY);

  const data = await tmdbApi(url);

  return data?.results;
};

const handler = async (request, response) => {
  try {
    const data = await getTrending();

    response.status(200).json({ data });
  } catch (error) {
    response.status(error.status).json({ message: error.message });
  }
};

export default handler;
export { getTrending };
