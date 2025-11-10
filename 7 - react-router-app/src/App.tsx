import { Link } from "react-router";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome to the App!
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Click the link below to see our products.
      </p>
      <Link
        to="/products"
        className="px-6 py-3 text-white bg-indigo-600 rounded-md font-semibold hover:bg-indigo-700 transition-colors duration-200"
      >
        Go to Products
      </Link>
    </div>
  );
}

export default App;
