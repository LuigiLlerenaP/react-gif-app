import { useEffect, useState } from "react";
import { getGifs, Gif } from "../helpers/getGifs";

export const useFetchGifs = (category: string) => {
  const [images, setImages] = useState<Gif[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getImages = async () => {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
    };
    getImages();
  }, [category]);
  return {
    images,
    isLoading,
  };
};
