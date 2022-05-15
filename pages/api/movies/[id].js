import { tmdbApi } from 'services';

const getMovie = async (id) => {
  const url = new URL(`https://api.themoviedb.org/3/movie/${id}`);
  url.searchParams.append('api_key', process.env.API_KEY);

  const data = await tmdbApi(url);

  return data;
};

const handler = async (request, response) => {
  try {
    const { id } = request.query;
    const data = await getMovie(id);

    response.status(200).json({ data });
  } catch (error) {
    console.log(error);
    response.status(error.status).json({ message: error.message });
  }
};

export default handler;
export { getMovie };
