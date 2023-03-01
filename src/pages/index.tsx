import Input from '@/components/Input';
import { Container, SearchContainer, Label } from './styles';
import { useLogic } from './logic';
import PodcastList from '@/components/PodcastList';

export default function Home() {
  const { handleFilterPodcasts, podcastList, isLoading } = useLogic();

  return (
    <>
      <main>
        <Container>
          <SearchContainer>
            <Label>{podcastList.length}</Label>
            <Input
              id="input-search"
              sizes="small"
              label="Filter podcasts..."
              type="search"
              onChange={handleFilterPodcasts}
            />
          </SearchContainer>
          <PodcastList podcastList={podcastList} />
        </Container>
      </main>
    </>
  );
}
