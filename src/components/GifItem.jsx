import PropTypes from 'prop-types'

const GifItem = ({ title, url }) => {
  return (
    <div className='card'>
      <p>{ title }</p>
      <img src={ url } alt={title} />
    </div>
  );
}

GifItem.prototype = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired
}
export default GifItem;