import Cart from "./components/Cart";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <header className="mb-8 pb-4 border-b border-gray-300">
        <h1 className="text-4xl font-extrabold text-indigo-700">
          My Shopping Cart
        </h1>
        <p className="text-gray-600 mt-1">
          Using TanStack Query for products, Redux Toolkit for Cart - Lesson 12
        </p>
      </header>

      <main className="flex flex-col md:flex-row lg:flex-row gap-8">
        <div className="w-full md:w-9/12">
          <ProductsList />
        </div>

        <div className="w-full md:w-3/12">
          <Cart />
        </div>
      </main>
    </div>
  );
}

export default App;
