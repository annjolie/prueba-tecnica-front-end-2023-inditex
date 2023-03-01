import React, { useEffect, useState } from 'react';
import { getPodcastDetail } from '@/axios';
import { PodcastDetailCardProps } from '@/components/PodcastDetailCard/types';
import { RowsData } from '@/components/EpisodeTable/types';
import { useRouter } from 'next/router';
import { PodcastContext } from '@/context';

export const useLogic = () => {
  const [podcast, setPodcast] = useState<PodcastDetailCardProps>({});
  const [episodes, setEpisodes] = useState<RowsData[]>([]);
  const { query } = useRouter();
  const { podcastId } = query;
  const { isLoading, setIsLoading } = React.useContext(PodcastContext);


  const millisToMinutesAndSeconds = (millis: number) : string => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000);
    return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
  }

  useEffect(() => {
    async function fetchData() {
      const { data: podcastResultData } = await getPodcastDetail(podcastId?.toString() ?? "");
      if (podcastResultData && podcastResultData.results.length > 0) {
        const podcastDetails : PodcastDetailCardProps = {
          podcastImage: podcastResultData.results[0].artworkUrl600,
          alt: podcastResultData.results[0].collectionName,
          podcastTitle: podcastResultData.results[0].collectionName,
          podcastAuthor: podcastResultData.results[0].artistName,
          podcastDescription: podcastResultData.results[0].description,
        };
        setPodcast(podcastDetails);
        
        const episodesData : RowsData[] = podcastResultData.results.slice(1).map((episode) => {
          return {
            title: episode.trackName,
            date: new Date(episode.releaseDate).toLocaleDateString(),
            duration: millisToMinutesAndSeconds(episode.trackTimeMillis),
            podcastid: podcastId?.toString() ?? "",
            episodeid: episode.trackId.toString(),
          } as RowsData;
        });
        setEpisodes(episodesData);

        setIsLoading(false);
      }
    }
    fetchData();
  }, [podcastId, setIsLoading]);

  return {
    podcast,
    episodes,
    isLoading,
  };
};
