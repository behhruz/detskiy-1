import React, { useState, useEffect } from "react";

const Xm = () => {
    const [products, setProducts] = useState([]);
    const API_URL = "http://localhost:5000/products";
    const API_TOKEN = "your-api-token-here";

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                "Authorization": `Bearer ${API_TOKEN}`,
                "Content-Type": "application/json"
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="px-4 py-8">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
                        >
                            <div className="relative">
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
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover"
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
