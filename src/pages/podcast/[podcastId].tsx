import { Container, RightContainer, Title } from './styles';
import { useLogic } from './logic';
import PodcastDetailCard from '@/components/PodcastDetailCard';
import EpisodeTable from '@/components/EpisodeTable';

export default function Home() {
  const { episodes, podcast, isLoading } = useLogic();

  return (
    <>
      <main>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Container>
            <PodcastDetailCard {...podcast} />
            <RightContainer>
              <Title>Episodes: {episodes.length}</Title>
              <EpisodeTable rowsData={episodes} />
            </RightContainer>
          </Container>
        )}
      </main>
    </>
  );
}
