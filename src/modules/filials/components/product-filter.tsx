import React, { useState } from "react";
import { Input } from "@nextui-org/react";

interface ProductFilterProps {
  onSearch: (searchTerm: string) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);
    onSearch(searchValue);
  };

  return (
    <Input
      placeholder="Mahsulot nomini kiriting"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default ProductFilter;
