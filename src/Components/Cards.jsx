import React, { useState, useEffect } from "react";
// import Vector from "../assets/Vector.png";



const Xm = () => {
    const [products, setProducts] = useState([]);
    const [clickedProducts, setClickedProducts] = useState([]);
    const API_URL = "http://localhost:5000/products";
    const API_TOKEN = "your-api-token-here";

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(API_URL, {
                    headers: {
                        "Authorization": `Bearer ${API_TOKEN}`,
                        "Content-Type": "application/json"
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        const storedProducts = localStorage.getItem('clickedProducts');
        if (storedProducts) {
            setClickedProducts(JSON.parse(storedProducts));
        }
    }, []);

    const handleClick = (product) => {
        const updatedClickedProducts = [...clickedProducts, product];
        setClickedProducts(updatedClickedProducts);
        localStorage.setItem('clickedProducts', JSON.stringify(updatedClickedProducts));
    };

    return (
        <div className="px-4 py-8">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className={`bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden ${
                                clickedProducts.some(p => p.id === product.id) ? "border-blue-500" : ""
                            }`}
                        >
                            <div className="relative ">
                                {product.isNew && (
                                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                                        New
                                    </span>
                                )}
                                {product.isOnSale && (
                                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                        Sale
                                    </span>
                                )}
                                <button
                                    className="absolute w-[45px] h-[40px] bg-white left-[290px] border rounded-[10px] top-[20px] flex items-center justify-center "
                                    onClick={() => handleClick(product)}
                                >
                                  {/* <img 
    className="w-full h-full transition-all duration-300 ease-in-out filter hover:brightness-110 hover:scale-105 active:brightness-50 active:scale-95"
    src={Vector} 
    alt="Add to Cart" 
/> */}
                                </button>

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-[360px] h-[300px]  object-cover"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <div className="text-gray-700 mt-2">
                                    <span className="text-lg font-bold">${product.price}</span>
                                    {product.oldPrice && (
                                        <span className="text-sm text-gray-500 line-through ml-2">
                                            ${product.oldPrice}
                                        </span>
                                    )}
                                </div>
                                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded shadow">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Xm;
