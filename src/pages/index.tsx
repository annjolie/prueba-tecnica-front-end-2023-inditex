import MainPoster from '@/components/MainPoster';
import { Title } from './styles';
import MovieGroup from '@/components/MovieGroup';
import { useLogic } from './logic';

export default function Home() {
  const { popularMovies, searchResults, movieForPoster } = useLogic();

  return (
    <>
      <main>
        {movieForPoster && <MainPoster {...movieForPoster} />}
        <Title>Peliculas populares</Title>
        <MovieGroup movies={popularMovies} />
        <Title>Todas las peliculas</Title>
        <MovieGroup movies={searchResults} />
      </main>
    </>
  );
}
