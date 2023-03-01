import { Container, RightContainer } from './styles';
import { useLogic } from './logic';
import PodcastDetailCard from '@/components/PodcastDetailCard';
import EpisodeReproducer from '@/components/EpisodeReproducer';

export default function Home() {
  const { podcast, isLoading, episode } = useLogic();

  return (
    <>
      <main>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Container>
            <PodcastDetailCard {...podcast} />
            <RightContainer>{episode && <EpisodeReproducer {...episode} />}</RightContainer>
          </Container>
        )}
      </main>
    </>
  );
}
