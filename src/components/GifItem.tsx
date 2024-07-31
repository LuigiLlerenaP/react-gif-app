import { Gif } from "../helpers/getGifs";

export const GifItem: React.FC<Gif> = ({ id, title, url }) => {
  return (
    <>
      <div key={id} className="border rounded-lg overflow-hidden shadow-lg">
        <img src={url} alt={title} className="w-full h-60 object-cover" />
        <div className="p-1 m-2">
          <h6 className="text-lg font-medium p-3">{title}</h6>
        </div>
      </div>
    </>
  );
};
