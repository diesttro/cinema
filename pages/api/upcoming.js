const getUpcoming = async () => {
  const url = new URL('https://api.themoviedb.org/3/movie/upcoming');
  url.searchParams.append('api_key', process.env.API_KEY);

  const dataResponse = await fetch(url);
  const data = await dataResponse.json();

  return data?.results;
};

const handler = async (request, response) => {
  try {
    const data = await getUpcoming();

    response.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

export default handler;
export { getUpcoming };
