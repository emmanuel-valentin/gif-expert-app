const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=eQfPKO059hrIHlb19Y4ubL3mUbrueFLn&limit=10&q=${category}`;
  const response = await fetch(url);
  const { data = [] } = await response.json();
  const gifs = data.map(image => ({
    id: image.id,
    title: image.title,
    url: image.images.downsized_medium.url
  }));

  return gifs;
};

export default getGifs;