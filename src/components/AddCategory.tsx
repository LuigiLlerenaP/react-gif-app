import { useState } from "react";
interface AddCategoryProps {
  onNewCategory: (
    event: React.MouseEvent<HTMLButtonElement>,
    newCategory: string
  ) => void;
}
export const AddCategory: React.FC<AddCategoryProps> = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handlerInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim().length <= 2) return;
    onNewCategory(
      event as unknown as React.MouseEvent<HTMLButtonElement>,
      inputValue
    );
    setInputValue("");
  };

  return (
    <section className="search-section mb-6 w-full max-w-md">
      <form
        onSubmit={handlerSubmit}
        className="flex flex-col items-center md:flex-row md:items-center"
      >
        <label htmlFor="gif-search" className="sr-only">
          Buscar GIFs
        </label>
        <input
          type="text"
          id="gif-search"
          placeholder="Buscar GIFs"
          value={inputValue}
          onChange={handlerInputChange}
          className="border border-gray-300 rounded-md p-2 mb-4 md:mb-0 w-full md:w-2/3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-md ml-0 md:ml-4 transition duration-300"
        >
          Search
        </button>
      </form>
    </section>
  );
};
