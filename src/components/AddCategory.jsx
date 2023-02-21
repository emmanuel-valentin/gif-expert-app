import { useState } from 'react';

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
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gif..."
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

export default AddCategory;