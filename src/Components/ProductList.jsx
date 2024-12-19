import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductList = () => {
    const { category } = useParams(); // URL-dan kategoriya nomini olish
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // API orqali mahsulotlarni kategoriya bo'yicha olish
        fetch(`http://localhost:5000/products?category=${category}`)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, [category]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Category: {category}</h1>
            {products.length > 0 ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product) => (
                        <li key={product.id} className="p-4 border rounded shadow">
                            <div className="w-full aspect-w-16 aspect-h-9 overflow-hidden rounded-md">
                                <img
                                    src={product.imgUrl}
                                    alt={product.name}
                                    className="w-3/4 h-3/4 object-cover mx-auto"
                                />
                            </div>
                            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                            <h3 className="text-sm text-gray-500">{product.about}</h3>
                            <p className="text-sm text-gray-500">${product.price}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No products available in this category.</p>
            )}
        </div>
    );
};

export default ProductList;
