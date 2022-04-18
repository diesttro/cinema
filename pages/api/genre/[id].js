const getGenre = async (id, page = 1) => {
  const dataResponse = await fetch(
    `https://api.themoviedb.org/3/discover/movie?with_genres=${id}&page=${page}&api_key=${process.env.API_KEY}`
  );
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
