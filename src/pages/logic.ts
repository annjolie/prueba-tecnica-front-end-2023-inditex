import { useEffect, useState } from 'react';
import { getPopularMovies, searchMovies } from '@/axios';
import { MovieType } from '@/common/types/movieType';
import { SmallMoviePreviewProps } from '@/components/SmallMoviePreview/types';

export const useLogic = () => {
  const [popularMovies, setPopularMovies] = useState<SmallMoviePreviewProps[]>([]);
  const [searchResults, setSearchResults] = useState<SmallMoviePreviewProps[]>([]);
  const [movieForPoster, setMovieForPoster] = useState<MovieType | null>(null);

  useEffect(() => {
    async function fetchData() {
      const { data: searchResultsData } = await searchMovies('a', 1);
      const { data: popularMoviesData } = await getPopularMovies();
      if (popularMoviesData) {
        setMovieForPoster(popularMoviesData.results[Math.floor(Math.random() * popularMoviesData.results.length)]);
      }
      setPopularMovies(popularMoviesData ? popularMoviesData.results : []);
      setSearchResults(searchResultsData ? searchResultsData.results : []);
    }
    fetchData();
  }, []);

  return {
    popularMovies,
    searchResults,
    movieForPoster,
  };
};
