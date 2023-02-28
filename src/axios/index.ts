import { URL } from '@/common/const/url';
import { GuestSessionType } from '@/common/types/guestSessionType';
import { MovieType } from '@/common/types/movieType';
import { PaginationResponseType } from '@/common/types/paginationResponseType';
import { StatusType } from '@/common/types/statusType';
import axios from 'axios';

const instance = axios.create({
  baseURL: URL.apiUrl,
  params: { api_key: URL.apiKey, language: 'en-US' },
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

export const getPopularMovies = async (): Promise<
  { data: PaginationResponseType<MovieType>; error: null } | AxiosError
> =>
  instance
    .get('/movie/popular')
    .then(({ data }) => ({ data, error: null }))
    .catch((error) => handleAxiosError(error));

export const searchMovies = async (
  query: string,
  page: number,
): Promise<{ data: PaginationResponseType<MovieType>; error: null } | AxiosError> =>
  instance
    .get('/search/movie', { params: { query, page } })
    .then(({ data }) => ({ data, error: null }))
    .catch((error) => handleAxiosError(error));

export const getMovieDetails = async (movieId: number): Promise<{ data: MovieType; error: null } | AxiosError> =>
  instance
    .get(`/movie/${movieId}`)
    .then(({ data }) => ({ data, error: null }))
    .catch((error) => handleAxiosError(error));

export const createGuestSession = async (): Promise<{ data: GuestSessionType; error: null } | AxiosError> =>
  instance
    .get('/authentication/guest_session/new')
    .then(({ data }) => ({ data, error: null }))
    .catch((error) => handleAxiosError(error));

export const rateMovie = async (
  movieId: number,
  rating: number,
  guestSessionId: string,
): Promise<{ data: StatusType; error: null } | AxiosError> =>
  instance
    .post(`/movie/${movieId}/rating`, { value: rating }, { params: { guest_session_id: guestSessionId } })
    .then(({ data }) => ({ data, error: null }))
    .catch((error) => handleAxiosError(error));
