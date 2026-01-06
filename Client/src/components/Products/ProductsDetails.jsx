import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const ProductsDetails = () => {
  const selectedProduct = {
    name: "Stylish Jacket",
    price: "120",
    originalPrice: "150",
    description: "This is the perfect Stylish jacket for perfect occasion",
    brand: "FashionLeather",
    material: "Leather",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Black"],
    images: [
      {
        url: "https://picsum.photos/500/500?random=1",
        altText: "Stylish Jacket 1",
      },
      {
        url: "https://picsum.photos/500/500?random=2",
        altText: "Stylish Jacket 2",
      },
    ],
  };
  const similarProduct = [
    {
      _id : 1,
      name : "Product 1",
      price: "100",
      images : [{url : "https://picsum.photos/500/500?random=3"}]
    },
    {
      _id : 2,
      name : "Product 2",
      price: "200",
      images : [{url : "https://picsum.photos/500/500?random=4"}]
    },
    {
      _id : 3,
      name : "Product 3",
      price: "300",
      images : [{url : "https://picsum.photos/500/500?random=5"}]
    },
    {
      _id : 4,
      name : "Product 4",
      price: "500",
      images : [{url : "https://picsum.photos/500/500?random=6"}]
    },
  ]

  const [mainImage, setMainImage] = useState(selectedProduct.images[0].url);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleDecreQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const handleIncQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleAddToCart = () => {
    if (!selectedColor && !selectedSize) {
      toast.error("Please Select the Color and Size Before Adding!!", {
        duration: 1000,
      });
      return;
    }
    setIsButtonDisabled(true);
    setTimeout(() => {
      toast.success("Product is Added To Cart !", { duration: 1000 });

      setIsButtonDisabled(false);
    }, 500);
  };
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* left thumbnail */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Main Page */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Mobile Thumbnail */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          {/* Right Side  */}
          <div className="md:w-1/2  md:ml-10 rounded-lg">
            <h1 className="mb-2 text-2xl font-semibold md:text-3xl">
              {selectedProduct.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectedProduct.originalPrice &&
                `${selectedProduct.originalPrice}`}
            </p>
            <p className="text-xl text--gray-500 mb-2">
              $ {selectedProduct.price}
            </p>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            <div className="mb-4">
              <p className="text-gray-700">Color :</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`h-8 w-8 rounded-full border cursor-pointer ${
                      selectedColor === color
                        ? "border-black border-2"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 ">Size:</p>
              <div className="flex mt-2 gap-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 border rounded cursor-pointer text-sm ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={handleDecreQuantity}
                  className="border rounded-full px-3 py-1 bg-gray-200 cursor-pointer"
                >
                  {" "}
                  -{" "}
                </button>
                <span>{quantity}</span>
                <button
                  onClick={handleIncQuantity}
                  className="border rounded-full px-3 py-1 bg-gray-200 cursor-pointer"
                >
                  {" "}
                  +{" "}
                </button>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`bg-black text-white px-6 py-4 rounded w-full mb-4 hover:bg-gray-900 cursor-pointer ${isButtonDisabled ? "cursor-not-allowed opacity-50" : ""}`}
            >
              {isButtonDisabled ? "Adding..." :"ADD TO CART"}
            </button>

            <div className="mt-6 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
          {/* you may also like section with men and women */}
        <div className="mt-20">
            <h2 className="text-2xl text-center font font-medium mb-4">
                  You May Also Like
            </h2>
            <ProductGrid products = {similarProduct}/>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
