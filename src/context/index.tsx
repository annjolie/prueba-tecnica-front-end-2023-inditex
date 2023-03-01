import React, { useState } from 'react';
import { PodcastProviderType } from './type';

export const PodcastContext = React.createContext({} as any);

export default function PodcastProvider({ children }: PodcastProviderType): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  return <PodcastContext.Provider value={{ isLoading, setIsLoading }}>{...React.Children.toArray(children)} </PodcastContext.Provider>;
}
