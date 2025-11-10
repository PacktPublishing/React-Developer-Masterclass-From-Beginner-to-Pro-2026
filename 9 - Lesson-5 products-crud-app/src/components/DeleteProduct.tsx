import api from "../api/client";

interface DeleteProductProps {
  id: string;
  onDelete: (id: string) => void;
}

export default function DeleteProduct({ id, onDelete }: DeleteProductProps) {
  const handleDelete = async () => {
    try {
      await api.delete(`/products/${id}`);
      onDelete(id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-xs text-white px-3 py-1 rounded hover:bg-red-600"
    >
      Delete
    </button>
  );
}
