// SideBar.jsx
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialState = searchParams.getAll("category");
  const initialOrder = searchParams.get("order");
  const [category, setCategory] = useState(initialState || []);
  const [order, setOrder] = useState(initialOrder || "");

  const handleFilter = (e) => {
    let newCategory = [...category];

    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };

  const handleSort = (e) => {
    setOrder(e.target.value);
  };

  useEffect(() => {
    const params = {
      category,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [category, order]);

  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-4">Filter By</h3>
      <div className="mb-2">
        <input
          type="checkbox"
          value="Novel"
          onChange={handleFilter}
          checked={category.includes("Novel")}
        />
        <label className="ml-2">Novel</label>
      </div>
      <div className="mb-2">
        <input
          type="checkbox"
          value="Motivational"
          onChange={handleFilter}
          checked={category.includes("Motivational")}
        />
        <label className="ml-2">Motivational</label>
      </div>
      <div className="mb-2">
        <input
          type="checkbox"
          value="Thriller"
          onChange={handleFilter}
          checked={category.includes("Thriller")}
        />
        <label className="ml-2">Thriller</label>
      </div>
      <div className="mb-2">
        <input
          type="checkbox"
          value="Science_Fiction"
          onChange={handleFilter}
          checked={category.includes("Science_Fiction")}
        />
        <label className="ml-2">Science Fiction</label>
      </div>
      <hr className="my-4" />
      <h3 className="text-lg font-semibold mb-4">Sort By Order</h3>
      <div onChange={handleSort} className="mb-2">
        <input
          type="radio"
          name="sort_by"
          value="asc"
          className="mr-2"
          defaultChecked={order === "asc"}
        />
        <label className="mr-4">Ascending</label>
        <input
          type="radio"
          name="sort_by"
          value="desc"
          className="mr-2"
          defaultChecked={order === "desc"}
        />
        <label>Descending</label>
      </div>
    </div>
  );
};

export default SideBar;
