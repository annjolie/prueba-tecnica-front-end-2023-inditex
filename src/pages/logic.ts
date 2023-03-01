import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { getPodcasts } from '@/axios';
import { SearchViewCardProps } from '@/components/SearchViewCard/types';

export const useLogic = () => {
  const [fullPodcastList, setFullPodcastList] = useState<SearchViewCardProps[]>([]);
  const [podcastList, setPodcastList] = useState<SearchViewCardProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      const { data: searchResultsData } = await getPodcasts();
      if (searchResultsData) {
        const podcastListData = searchResultsData.feed.entry.map((podcast) => {
          return {
            id: podcast.id.attributes['im:id'],
            podcastImage: podcast['im:image'][0].label,
            alt: podcast['im:name'].label,
            podcastTitle: podcast.title.label,
            podcastAuthor: podcast['im:artist'].label,
          } as SearchViewCardProps;
        });
        setFullPodcastList(podcastListData);
        setPodcastList(podcastListData);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleFilterPodcasts = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.currentTarget.value) {
        const podcastFiltered = fullPodcastList.filter((podcast) => {
          return (
            podcast.podcastTitle?.toLowerCase().includes(event.currentTarget.value.toLowerCase()) ||
            podcast.podcastAuthor?.toLowerCase().includes(event.currentTarget.value.toLowerCase())
          );
        });
        setPodcastList(podcastFiltered);
      } else {
        setPodcastList(fullPodcastList);
      }
    },
    [fullPodcastList],
  );

  return {
    podcastList,
    isLoading,
    handleFilterPodcasts,
  };
};
