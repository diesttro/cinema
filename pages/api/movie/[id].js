const getMovie = async (id) => {
  const dataResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );
  const data = await dataResponse.json();

  return data;
};

const handler = async (request, response) => {
  try {
    const { id } = request.query;
    const data = await getMovie(id);

    response.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

export default handler;
export { getMovie };
