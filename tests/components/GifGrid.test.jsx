import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/';
import { useFetchGifs } from '../../src/hooks/useFetchGif';

jest.mock('../../src/hooks/useFetchGif');

describe('Pruebas en el componente GifGrid', () => {

  const category = 'Paul McCartney';

  test('Debe de mostrar el loading inicialmente', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText('Loading GIFs...')).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });

  test('Debe mostrar items cuando se cargan las imágenes desde useFetchGifs', () => {
    const gifs = [
      {
        id: 'abc',
        title: 'Macca',
        url: 'https://localhost/mccartney.jpg'
      },
      {
        id: 'dce',
        title: 'Macca with George',
        url: 'https://localhost/maccartney2.jpg'
      }
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);
  });
});