import { useParams } from "react-router";

const products = [
  {
    id: "1",
    name: "Cozy Knit Sweater",
    price: 65.99,
    image: "/sweater.jpg",
  },
  {
    id: "2",
    name: "Vintage Leather Jacket",
    price: 150.0,
    image: "/jacket.jpg",
  },
  {
    id: "3",
    name: "Classic Denim Jeans",
    price: 89.5,
    image: "/denim-jeans.jpg",
  },
];

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-2xl text-gray-700">Product not found. 😢</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8 flex flex-col justify-between md:w-1/2">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-bold text-gray-700 mb-6">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              This is a brief description of the product. It highlights its key
              features and benefits, giving the customer a better understanding
              of what they are purchasing. The description can be expanded with
              more details about materials, sizing, and care instructions.
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="flex-1 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
              Add to Cart 🛒
            </button>
            <button className="flex-1 bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-md shadow-lg hover:bg-gray-300 transition duration-300 transform hover:scale-105">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
