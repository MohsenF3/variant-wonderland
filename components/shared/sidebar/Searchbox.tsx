import React from "react";

interface SearchboxProps {
  query: string;
  onQueryChange: (text: string) => void;
}

const Searchbox = (props: SearchboxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onQueryChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={props.query}
      onChange={handleChange}
      placeholder="Search For Variants..."
      className="w-full border-b bg-transparent focus:outline-none mb-5 px-2 placeholder:text-foreground"
    />
  );
};

export default React.memo(Searchbox);
