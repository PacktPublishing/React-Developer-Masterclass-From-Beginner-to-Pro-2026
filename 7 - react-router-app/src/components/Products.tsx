import { useLoaderData, Link } from "react-router";

interface Product {
  id: string;
  name: string;
  price: number;
}

const Products = () => {
  const products = useLoaderData() as Product[];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {product.name}
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              ${product.price.toFixed(2)}
            </p>
            <Link
              to={`/products/${product.id}`}
              className="inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
