import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [priceRange, setPriceRange] = useState([0, 100]);
  // const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });
  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    "Red",
    "Blue",
    "Beige",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Navy",
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const materials = [
    "Cotton",
    "Wool",
    "Denim",
    "Polyester",
    "Silk",
    "Linen",
    "Viscose",
    "Fleece",
  ];
  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChicStyle",
  ];
  const gender = ["Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]); // convert all the params queries into json
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });

    setPriceRange([0, params.maxPrice || 100]);
  }, [searchParams]);

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;

    // console.log({name,value,checked,type});
    let newFilters = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value]; // append checkbox like ["XS", "S"] append the s later the array
      } else {
        newFilters[name] = newFilters[name].filter((item) => item != value); // here we check and take all the arrray element except the one is unchecked
      }
    } else {
      newFilters[name] = value; /// means newFilter[gender] = male; 
    }

    setFilters(newFilters);
    // console.log(newFilters);
    updateParams(newFilters)
  };
  const updateParams = (newFilters) => {
    const params = new URLSearchParams();
    // {category : "Top Wear", size : "XS", "S"}
    Object.keys(newFilters).forEach((key)=>{
      if(Array.isArray(newFilters[key]) && newFilters[key].length > 0){
        params.append(key,newFilters[key].join(","));
      }else if(newFilters[key]){
          params.append(key,newFilters[key]); /// ?cateory=Bottom+Wear&size=XS%
      }
    })
    setSearchParams(params);
    // navigate(`${params.toString()}`); //?cateory=Bottom+Wear&size=XS%
  }
  const handlePriceRange = (e)=>{
    const newPrice = e.target.value;
    setPriceRange([0,newPrice]);
    const newFilters = {...filters, minPrice : 0, maxPrice : newPrice};
    setFilters(newFilters);
    updateParams(newFilters);
  }
  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4 border-b">
        Filter
      </h3>

      {/* Category Filters */}
      <div className="mb-6">
        <label className="block text-gray-600 mb-2 font-medium">Category</label>
        {categories.map((category, index) => (
          <div key={index} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={category}
              onChange={handleFilterChange}
              checked={filters.category === category} // this is for the page reload that the choice is remain intact
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>
      {/* gender Filters */}
      <div className="mb-6">
        <label className="block text-gray-600 mb-2 font-medium">Gender</label>
        {gender.map((gen, index) => (
          <div key={index} className="flex items-center mb-1">
            <input
              type="radio"
              name="gender"
              value={gen}
              onChange={handleFilterChange}
              checked={filters.gender === gen}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{gen}</span>
          </div>
        ))}
      </div>
      {/* color Filters we make this like a visible colors dikhna chahiye lets do it*/}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Colors</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              className={`rounded-full w-8 h-8 border border-gray-300 cursor-pointer transition hover:scale-105 ${filters.color === color ? "ring-2 ring-blue-500" : ""}`}
              key={color}
              style={{ backgroundColor: color.toLowerCase() }}
              name="color"
              value={color}
              onClick={handleFilterChange}
            ></button>
          ))}
        </div>
      </div>

      {/* size Filter is an array so we have to make it checkbox type */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Sizes</label>
        {sizes.map((size, index) => (
          <div key={index} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="size"
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
              value={size}
              onChange={handleFilterChange}
              checked={filters.size.includes(size)}
            />
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>
      {/*material filter*/}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          Materials
        </label>
        {materials.map((material, index) => (
          <div key={index} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="material"
              value={material}
              onChange={handleFilterChange}
              checked={filters.material.includes(material)}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{material}</span>
          </div>
        ))}
      </div>
      {/* brand filter*/}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Brands</label>
        {brands.map((brand, index) => (
          <div key={index} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              onChange={handleFilterChange}
              checked={filters.brand.includes(brand)}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>
      {/* price ramge */}
      <div className="mb-8">
        <label className="block text-gray-600 font-medium mb-2">
          Price Range
        </label>
        <input
          type="range"
          name="priceRange"
          min={0}
          max={100}
          value={priceRange[1]}
          onChange={handlePriceRange}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-gray-600 mt-2">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSideBar;
