import { render, screen } from '@testing-library/react';
import GifItem from '../../src/components/GifItem';

describe('Pruebas en el componente GifItem', () => {
  const title = "Hola mundo";
  const image = { url: 'https://www.holamundo.com/' };

  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<GifItem title={title} image={image} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GifItem title={title} image={image} />);
    // screen.debug();
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(image.url);
    expect(alt).toBe(title);
  });

  test('Debe de mostrar el título en el componente', () => {
    render(<GifItem title={title} image={image} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});