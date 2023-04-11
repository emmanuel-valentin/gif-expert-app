import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGif';

describe('Pruebas en el hook useFetchGifs', () => {
  test('Debe regresar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs('IBM'));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBe(true);
    // useFetchGifs();
  });

  test('Debe de retornar un arreglo de images e isLoading en false', async () => {
    const { result } = renderHook(() => useFetchGifs('IBM'));

    await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0));  

    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBe(false);
  });
});