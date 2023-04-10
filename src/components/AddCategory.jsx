import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    const nextInputValue = event.target.value;
    setInputValue(nextInputValue);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.length <= 1) return;
    onNewCategory(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit} aria-label='form'>
      <input
        type="text"
        placeholder="Buscar Gif..."
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};

export default AddCategory;