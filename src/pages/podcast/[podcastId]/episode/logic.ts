import { useEffect, useState } from 'react';
import { getPodcastDetail } from '@/axios';
import { PodcastDetailCardProps } from '@/components/PodcastDetailCard/types';
import { useRouter } from 'next/router';
import { EpisodeReproducerProps } from '@/components/EpisodeReproducer/types';

export const useLogic = () => {
  const [podcast, setPodcast] = useState<PodcastDetailCardProps>({});
  const [episode, setEpisode] = useState<EpisodeReproducerProps | null>(null);
  const { query } = useRouter();
  const { podcastId, episodeid } = query;
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      const { data: podcastResultData } = await getPodcastDetail(podcastId?.toString() ?? '');
      if (podcastResultData && podcastResultData.results.length > 0) {
        const podcastDetails: PodcastDetailCardProps = {
          podcastImage: podcastResultData.results[0].artworkUrl600,
          alt: podcastResultData.results[0].collectionName,
          podcastTitle: podcastResultData.results[0].collectionName,
          podcastAuthor: podcastResultData.results[0].artistName,
          podcastDescription: podcastResultData.results[0].description,
        };
        setPodcast(podcastDetails);

        const episodeData = podcastResultData.results
          .slice(1)
          .find((episode) => episode.trackId === parseInt(episodeid?.toString() ?? ''));
        const episodeReproduction: EpisodeReproducerProps = {
          title: episodeData?.trackName ?? '',
          descriptionText: episodeData?.description ?? '',
          episodeUrl: episodeData?.episodeUrl ?? '',
        };
        setEpisode(episodeReproduction);

        setIsLoading(false);
      }
    }
    fetchData();
  }, [podcastId, episodeid]);

  return {
    podcast,
    episode,
    isLoading,
  };
};
