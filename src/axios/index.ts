import { URL } from '@/common/const/url';
import { PodcastDetailType } from '@/common/types/podcastDetailsType';
import { TopPodcastType } from '@/common/types/podcastType';
import axios from 'axios';

const instance = axios.create({
  baseURL: URL.apiUrl,
  timeout: 1000,
});

type AxiosError = {
  data: null;
  error: Error;
};

const handleAxiosError = (error: Error): AxiosError => ({
  data: null,
  error,
});

export const getPodcasts = async (): Promise<{ data: TopPodcastType; error: null } | AxiosError> =>
  instance
    .get('/us/rss/toppodcasts/limit=100/genre=1310/json')
    .then(({ data }) => ({ data, error: null }))
    .catch((error) => handleAxiosError(error));

export const getPodcastDetail = async (podcastId: string): Promise<{ data: PodcastDetailType; error: null } | AxiosError> =>
  instance
    .get(`/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`)
    .then(({ data }) => ({ data, error: null }))
    .catch((error) => handleAxiosError(error));
