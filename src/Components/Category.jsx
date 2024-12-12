import React, { useEffect, useState } from "react";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("http://localhost:5000/cattegories");
                if (!response.ok) {
                    throw new Error("Failed to fetch categories");
                }
                const data = await response.json();
                setCategories(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1 className="text-2xl font-semibold py-6 px-24">Top categories</h1>
              <ul>
                <div className='w-full'>
                    <div className="carousel bg-white w-full h-[50vh] carousel-center bg-neutral rounded-box p-4 flex gap-3">

                        {categories.map((category) => (
                            <div className="carousel-item w-[400px] relative">
                                <img
                                    src={category.imgURL}
                                    className="rounded-box w-full object-cover" />
                                <h2 className="absolute bottom-4  bg-black w-full py-[20px] text-white font-bold text-2xl pr-[30px] pl-[30px] opacity-[60%]">{category.title}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </ul>
        </div>
    );
};

export default Categories;
