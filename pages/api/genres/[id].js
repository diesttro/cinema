const getGenre = async (id, page = 1) => {
  const url = new URL('https://api.themoviedb.org/3/discover/movie');
  url.searchParams.append('with_genres', id);
  url.searchParams.append('page', page);
  url.searchParams.append('api_key', process.env.API_KEY);

  const dataResponse = await fetch(url.toString());
  const data = await dataResponse.json();

  return data?.results;
};

const handler = async (request, response) => {
  try {
    const { id, page } = request.query;
    const data = await getGenre(id, page);

    response.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

export default handler;
export { getGenre };
