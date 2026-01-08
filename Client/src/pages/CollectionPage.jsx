import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSideBar from "../components/Products/FilterSideBar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sideBarRef = useRef(null);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const handleClickOutside = (e) => {
    if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
      setIsSideBarOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    // unmount it
    return ()=>{
        document.removeEventListener("mousedown", handleClickOutside);
    }
  });

  useEffect(() => {
    setTimeout(() => {
      const fetchProduct = [
        {
          _id: 1,
          name: "Product 1",
          price: "100",
          images: [{ url: "https://picsum.photos/500/500?random=7" }],
        },
        {
          _id: 2,
          name: "Product 2",
          price: "200",
          images: [{ url: "https://picsum.photos/500/500?random=8" }],
        },
        {
          _id: 3,
          name: "Product 3",
          price: "300",
          images: [{ url: "https://picsum.photos/500/500?random=9" }],
        },
        {
          _id: 4,
          name: "Product 4",
          price: "500",
          images: [{ url: "https://picsum.photos/500/500?random=10" }],
        },
        {
          _id: 5,
          name: "Product 5",
          price: "100",
          images: [{ url: "https://picsum.photos/500/500?random=11" }],
        },
        {
          _id: 6,
          name: "Product 6",
          price: "200",
          images: [{ url: "https://picsum.photos/500/500?random=12" }],
        },
        {
          _id: 7,
          name: "Product 7",
          price: "300",
          images: [{ url: "https://picsum.photos/500/500?random=13" }],
        },
        {
          _id: 8,
          name: "Product 8",
          price: "500",
          images: [{ url: "https://picsum.photos/500/500?random=14" }],
        },
      ];
      setProducts(fetchProduct);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter button */}
      <button
        onClick={toggleSideBar}
        className="border p-2 lg:hidden flex justify-center items-center"
      >
        <FaFilter className="mr-2" />
      </button>

      {/* Filter Sidebar */}
      <div
        ref={sideBarRef}
        className={`${
          isSideBarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 bg-gray-100 overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSideBar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">
            All Collections
        </h2>
        <SortOptions/>
        <ProductGrid products={products}/>
      </div>
    </div>
  );
};

export default CollectionPage;
