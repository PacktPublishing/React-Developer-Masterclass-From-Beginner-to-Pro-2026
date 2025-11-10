import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import api from "../api/client";
import type { Product } from "../interfaces/Product";

interface UpdateProductProps {
  product: Product;
  onUpdate: (product: Product) => void;
  // optional controlled editing state
  isEditing?: boolean;
  onToggleEdit?: (value: boolean) => void;
}

export default function UpdateProduct({
  product,
  onUpdate,
  isEditing,
  onToggleEdit,
}: UpdateProductProps) {
  // If parent controls editing, use that; otherwise fall back to internal state
  const [internalEdit, setInternalEdit] = useState<boolean>(false);
  const showEdit = typeof isEditing === "boolean" ? isEditing : internalEdit;
  const [form, setForm] = useState<{
    name: string;
    description: string;
    price: string;
  }>(() => ({
    name: product.name,
    description: product.description,
    price: String(product.price),
  }));

  // keep form in sync if product prop changes
  useEffect(() => {
    setForm({
      name: product.name,
      description: product.description,
      price: String(product.price),
    });
  }, [product]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const key = e.target.name as keyof typeof form;
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const payload: Product = {
        ...product,
        name: form.name,
        description: form.description,
        price: Number(form.price),
      };

      const res = await api.put<Product>(`/products/${product.id}`, payload);
      onUpdate(res.data);
      if (typeof onToggleEdit === "function") onToggleEdit(false);
      else setInternalEdit(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCancel = () => {
    // reset form to product values
    setForm({
      name: product.name,
      description: product.description,
      price: String(product.price),
    });
    if (typeof onToggleEdit === "function") onToggleEdit(false);
    else setInternalEdit(false);
  };

  return (
    <div className="flex flex-col items-end">
      {!showEdit ? (
        <button
          onClick={() =>
            typeof onToggleEdit === "function"
              ? onToggleEdit(true)
              : setInternalEdit(true)
          }
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-xs"
        >
          Edit
        </button>
      ) : (
        <form
          onSubmit={handleSave}
          className="w-64 bg-gray-50 p-3 rounded shadow"
        >
          <div className="mb-2">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-1 rounded"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-2">
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full border p-1 rounded"
              placeholder="Description"
            />
          </div>
          <div className="mb-2">
            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              className="w-full border p-1 rounded"
              placeholder="Price"
              inputMode="decimal"
              required
            />
          </div>
          <div className="flex gap-2 justify-end">
            <button
              type="button"
              onClick={handleCancel}
              className="px-2 py-1 rounded border"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-2 py-1 rounded bg-blue-500 text-white"
            >
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
