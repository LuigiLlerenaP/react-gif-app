import { useState } from "react";
import { AddCategory, Gif, Header, Footer } from "./components";

export const GifApp: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const handlerAddCategory = (
    event: React.MouseEvent<HTMLButtonElement>,
    newCategory: string
  ): void => {
    event.preventDefault();
    if (categories.includes(newCategory)) return;

    setCategories((prevCategory: string[]) => {
      return [newCategory, ...prevCategory];
    });
  };

  return (
    <>
      <Header title={"Gif App"} />
      <main className="p-6 bg-blue-900 min-h-screen flex flex-col items-center">
        <AddCategory onNewCategory={handlerAddCategory} />
        <Gif categories={categories}></Gif>
      </main>
      <Footer />
    </>
  );
};
