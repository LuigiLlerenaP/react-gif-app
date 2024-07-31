export type Gif = {
  id: string;
  title: string;
  url: string;
};

// Define a type for the API response data
type GiphyApiResponse = {
  data: Array<{
    id: string;
    title: string;
    images: {
      downsized_medium: {
        url: string;
      };
    };
  }>;
};

export const getGifs = async (category: string): Promise<Gif[]> => {
  try {
    const url: string = `https://api.giphy.com/v1/gifs/search?api_key=6Svl7MSJPEoXjfzXRBEtML6wPaMj1Avr&q=${category}&limit=10`;
    const resp = await fetch(url);

    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }

    const { data }: GiphyApiResponse = await resp.json();

    const gifs: Gif[] = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));

    return gifs;
  } catch (error) {
    console.error("Failed to fetch gifs:", error);
    return [];
  }
};
