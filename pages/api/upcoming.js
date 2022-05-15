import { tmdbApi } from 'services';

const getUpcoming = async () => {
  const url = new URL('https://api.themoviedb.org/3/movie/upcoming');
  url.searchParams.append('api_key', process.env.API_KEY);

  const data = await tmdbApi(url);

  return data?.results;
};

const handler = async (request, response) => {
  try {
    const data = await getUpcoming();

    response.status(200).json({ data });
  } catch (error) {
    response.status(error.status).json({ message: error.message });
  }
};

export default handler;
export { getUpcoming };
