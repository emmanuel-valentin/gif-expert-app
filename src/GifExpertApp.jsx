import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
import trimInputValue from './helpers/trimInputValue';

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(trimInputValue(newCategory))) return;
    setCategories([
      trimInputValue(newCategory),
      ...categories
    ]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map(category => <GifGrid key={category} category={category} />)}
    </>
  );
};

export default GifExpertApp;