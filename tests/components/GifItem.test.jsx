import { render } from '@testing-library/react';
import GifItem from '../../src/components/GifItem';

describe('Pruebas en el componente GifItem', () => {
  test('Debe hacer match con el snapshot', () => {
    const title = "Hola mundo";
    const image = { url: 'https://www.holamundo.com' };
    const { container } = render(<GifItem title={title} image={image} />);
    
    expect(container).toMatchSnapshot();
  });
});