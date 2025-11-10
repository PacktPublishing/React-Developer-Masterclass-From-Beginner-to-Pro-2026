import { useQuery } from "@tanstack/react-query";
import type { Product } from "../types";
import { getProducts } from "../api/productsApi";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-64 w-full">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900">
          <p className="text-lg text-gray-700">Loading products....</p>
        </div>
      </div>
    );

  if (isError)
    return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className="w-full">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-2">
        Available Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products && products.length === 0 && (
        <div className="text-gray-500">No products available.</div>
      )}
    </div>
  );
};

export default ProductsList;
