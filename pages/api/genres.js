const getGenres = async () => {
  const dataResponse = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}`
  );
  const data = await dataResponse.json();

  return data?.genres;
};

const handler = async (request, response) => {
  try {
    const data = await getGenres();

    response.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

export default handler;
export { getGenres };
