const tmdbApi = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) throw { status: response.status, message: data.status_message };

  return data;
};

export { tmdbApi };
