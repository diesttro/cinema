const handler = async (request, response) => {
  try {
    const moviesResponse = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}`
    );
    const movies = await moviesResponse.json();

    response.status(200).json({ data: movies?.results });
  } catch (error) {
    console.log(error);
  }
};

export default handler;
