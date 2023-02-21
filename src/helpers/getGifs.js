const getGifs = async (category) => {
  const baseUrl = import.meta.env.VITE_GIPHY_BASE_URL;
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
  const url = `${baseUrl}/search?api_key=${apiKey}&limit=10&q=${category}`;
  const response = await fetch(url);
  const { data = [] } = await response.json();
  const gifs = data.map(image => ({
    id: image.id,
    title: image.title,
    url: image.images.downsized_medium
  }));

  return gifs;
};

export default getGifs;