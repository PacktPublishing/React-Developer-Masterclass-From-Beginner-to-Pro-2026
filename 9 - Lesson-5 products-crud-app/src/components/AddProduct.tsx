import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import api from "../api/client";
import type { Product } from "../interfaces/Product";

interface AddProductFormProps {
  onAdd: (product: Product) => void;
}

interface FormState {
  name: string;
  quantity: string;
  description: string;
  price: string;
}

export default function AddProductForm({ onAdd }: AddProductFormProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    quantity: "",
    description: "",
    price: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const key = target.name as keyof FormState;
    setForm((prev) => ({ ...prev, [key]: target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // convert numeric fields to numbers if needed by the API
      const payload = {
        ...form,
        price: parseFloat(form.price),
        quantity: parseInt(form.quantity, 10),
      } as unknown as Record<string, unknown>;

      const res = await api.post<Product>("/products", payload);
      onAdd(res.data);
      setForm({ name: "", quantity: "", description: "", price: "" });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow mb-6"
    >
      <h2 className="text-xl font-bold text-blue-500 mb-4">➕ Add Product</h2>
      <div className="grid gap-3">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="border p-2 rounded"
        />
        <input
          name="quantity"
          value={form.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          className="border p-2 rounded"
        />
        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="border p-2 rounded"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Product
        </button>
      </div>
    </form>
  );
}
