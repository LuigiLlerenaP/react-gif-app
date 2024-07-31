import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { LoadingSpinner } from "./LoadingSpinner";

export type GifGridProps = {
  category: string;
};

export const GifGrid: React.FC<GifGridProps> = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h4 className="text-xl font-semibold mb-1 ">{category.toUpperCase()}</h4>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <GifItem key={image.id} {...image} />
          ))}
        </div>
      )}
    </>
  );
};
