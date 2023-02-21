import GifItem from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGif';

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  const showImages = (images) => {
    return images.map(({ id, title, url }) =>
      <GifItem
        key={id}
        title={title}
        image={{ ...url }}
      />
    );
  };

  return (
    <div>
      <h3>{category}</h3>
      {isLoading && <span>Loading GIFs...</span>}
      <div className='card-grid'>
        {showImages(images)}
      </div>
    </div>
  );
};

export default GifGrid;