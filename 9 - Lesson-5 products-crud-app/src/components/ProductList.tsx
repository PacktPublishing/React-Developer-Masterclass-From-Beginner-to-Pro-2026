import { useEffect, useState } from "react";
import api from "../api/client";
import { type Product } from "../interfaces/Product";
import AddProductForm from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import DeleteProduct from "./DeleteProduct";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [showAdd, setShowAdd] = useState<boolean>(false);
  // id of product currently being edited (shows the inline edit form)
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get<Product[]>("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-blue-600">🛒 Products</h1>
        <div className="flex items-center gap-3">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={() => setShowAdd((s) => !s)}
          >
            {showAdd ? "Close" : "Add New Product"}
          </button>
        </div>
      </div>

      {showAdd && (
        <AddProductForm
          onAdd={(product: Product) => {
            setProducts((prev) => [product, ...prev]);
            setShowAdd(false);
          }}
        />
      )}

      <div className="space-y-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-start"
          >
            <div>
              <h2 className="font-semibold text-lg">{p.name}</h2>
              <p className="text-gray-600">{p.description}</p>
              <p className="mt-2 font-medium">💲 {p.price}</p>
            </div>

            <div className="ml-4 flex flex-col gap-2 items-end">
              <UpdateProduct
                product={p}
                isEditing={editingId === p.id}
                onToggleEdit={(val) => setEditingId(val ? p.id : null)}
                onUpdate={(updatedProduct) => {
                  setProducts((prev) =>
                    prev.map((it) =>
                      it.id === updatedProduct.id ? updatedProduct : it
                    )
                  );
                  setEditingId(null);
                }}
              />

              <DeleteProduct
                id={p.id}
                onDelete={(deletedId) => {
                  setProducts((prev) =>
                    prev.filter((it) => it.id !== deletedId)
                  );
                  if (editingId === deletedId) setEditingId(null);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
