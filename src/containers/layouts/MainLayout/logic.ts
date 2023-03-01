import { PodcastContext } from "@/context";
import React from "react";


export const useLogic = () => {
    const {isLoading} = React.useContext(PodcastContext);

  return {
    isLoading,
  };
};
