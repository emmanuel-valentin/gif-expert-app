import PropTypes from 'prop-types'

const GifItem = ({ title, image }) => {
  return (
    <div className='card'>
      <p>{ title }</p>
      <img src={ image.url }/>
    </div>
  );
}

GifItem.prototype = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired
}
export default GifItem;