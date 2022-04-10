const getTrending = async () => {
  const dataResponse = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}`
  );
  const data = await dataResponse.json();

  return data?.results;
};

const handler = async (request, response) => {
  try {
    const data = await getTrending();

    response.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

export default handler;
export { getTrending };
