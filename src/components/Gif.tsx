import { GifGrid } from "./GifGrid";

type GifProps = {
  categories: string[];
};

export const Gif: React.FC<GifProps> = ({ categories }) => {
  return (
    <>
      <section className="bg-cyan-700 p-8 rounded-md  w-dvw max-w-7xl mx-auto mt-8">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">
          Resultados de búsqueda
        </h2>
        <div className="gif-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {categories.map((category) => (
            <article
              key={category}
              className="gif-item border border-gray-300 p-4 m-4 rounded-md shadow-sm bg-white w-full hover:shadow-md transition-shadow duration-300"
            >
              <ol className="list-disc pl-5 text-gray-800">
                <GifGrid key={category} category={category} />
              </ol>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
