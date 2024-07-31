import React from "react";

type HeaderProps = {
  title: string;
};

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <>
      <header className="h-20 bg-slate-800 flex items-center justify-center shadow-md">
        <h1 className="text-white text-3xl font-semibold">{title}</h1>
      </header>
    </>
  );
};
